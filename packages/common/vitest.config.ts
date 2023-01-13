import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    clearMocks: true,
    passWithNoTests: true,
    root: '.',
    coverage: {
      include: ['src/**'],
      all: true,
      reportsDirectory: 'coverage',
    },
    include: ['src/**/*.test.ts'],
  },
})
