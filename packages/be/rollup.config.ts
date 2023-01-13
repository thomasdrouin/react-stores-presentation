import { babel } from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'

module.exports = {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    nodeResolve({ extensions: ['.js', '.ts'], resolveOnly: [/^@food-presto\/.*$/] }),
    babel({ extensions: ['.js', '.ts'], babelHelpers: 'bundled' }),
    json(),
  ],
  watch: {
    include: 'src/**',
  },
}
