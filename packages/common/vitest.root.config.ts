import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    clearMocks: true,
    passWithNoTests: true,
    root: '../../',
    coverage: {
      include: ['packages/common/src/**'],
      all: true,
      reportsDirectory: 'packages/common/coverage',
    },
    include: ['packages/common/src/**/*.test.ts'],
  },
})
