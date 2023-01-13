import { Item } from '@food-presto/common'
import cors from 'cors'
import express from 'express'
import { Collection, Db, MongoClient, ObjectId, ReplaceOneModel, WithId } from 'mongodb'
import { MongoMemoryServer } from 'mongodb-memory-server'

export const DB_NAME = 'react-states-test'
export const IP = '127.0.0.1'
export const PORT = 63605
const DB_URI = `mongodb://${IP}:${PORT}/`
const ITEM_COLLECTION = 'items'

const main = async () => {
  await MongoMemoryServer.create({ instance: { dbName: DB_NAME, ip: IP, port: PORT } })
  const mongoDb = (
    await MongoClient.connect(DB_URI, {
      connectTimeoutMS: 5000,
      serverSelectionTimeoutMS: 5000,
    })
  ).db(DB_NAME)

  const itemRepo = new ItemRepo(mongoDb)

  const app = express()

  app.use([express.json(), express.urlencoded({ extended: true }), cors()])

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/items', async (req, res) => {
    res.send(await itemRepo.getItems())
  })

  app.listen(4000, () => console.log('App running on 127.0.0.1'))
}

export class ItemRepo {
  readonly itemCollection: Collection<Omit<Item, 'id'>>

  constructor(readonly mongoDb: Db) {
    this.itemCollection = mongoDb.collection<Omit<Item, 'id'>>(ITEM_COLLECTION)
  }

  async getItems(): Promise<Item[]> {
    return (await (await this.itemCollection.find({})).toArray()).map((dbProduct) => dbItemToItem(dbProduct))
  }

  async getItem(id: Item['id']): Promise<Item> {
    const item = await this.itemCollection.findOne({})
    if (!item) {
      throw Error(`Item with id${id} was not found.`)
    }
    return dbItemToItem(item)
  }

  async addItem(item: Omit<Item, 'id'>): Promise<void> {
    await this.itemCollection.insertOne(item)
  }

  async addItems(items: Omit<Item, 'id'>[]): Promise<void> {
    await this.itemCollection.insertMany(items)
  }

  async updateItems(items: Item[]): Promise<void> {
    const updates: { replaceOne: ReplaceOneModel<Omit<Item, 'id'>> }[] = items.map((item) => ({
      replaceOne: {
        filter: { _id: new ObjectId(item.id) },
        replacement: item,
        upsert: true,
      },
    }))
    await this.itemCollection.bulkWrite(updates)
  }

  async updateItem(item: Item): Promise<void> {
    await this.itemCollection.replaceOne({ _id: new ObjectId(item.id) }, item, { upsert: false })
  }
}
const dbItemToItem = (item: WithId<Omit<Item, 'id'>>): Item => {
  return {
    id: item._id.toString(),
    name: item.name,
    description: item.description,
  }
}

main().then()
