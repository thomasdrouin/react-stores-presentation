import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    clearMocks: true,
    passWithNoTests: true,
    coverage: {
      all: true,
    },
    include: ['**/*.test.ts'],
  },
})
