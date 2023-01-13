import { Item } from '@food-presto/common'
import axios from 'axios'

export class ItemClient {
  private readonly axiosClient = axios.create()

  async getItems(): Promise<Item[]> {
    return (await this.axiosClient.get('http://localhost:4000/items')).data
  }
}
