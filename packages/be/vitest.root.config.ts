import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    clearMocks: true,
    passWithNoTests: true,
    coverage: {
      include: ['packages/functions/src/**/*.ts'],
      all: true,
      reportsDirectory: 'packages/functions/coverage',
    },
    include: ['packages/functions/src/**/*.test.ts'],
  },
})
