import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    clearMocks: true,
    passWithNoTests: true,
    coverage: {
      include: ['packages/front/src/**'],
      all: true,
      reportsDirectory: 'packages/front/coverage',
    },
    include: ['packages/front/src/**/*.test.ts'],
  },
})
