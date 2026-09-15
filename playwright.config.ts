import process from 'node:process'
import { defineConfig } from '@playwright/test'
export default defineConfig({
  testDir: './tests',
  timeout: 90000,
  fullyParallel: false,
  workers: 1,
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:43187',
    actionTimeout: 10000,
    viewport: { width: 1440, height: 1000 },
    reducedMotion: 'reduce',
    launchOptions: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE
      ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE }
      : {},
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'node .output/server/index.mjs',
    url: 'http://127.0.0.1:43187',
    env: { NITRO_PORT: '43187', NITRO_HOST: '127.0.0.1' },
    reuseExistingServer: false,
    timeout: 30000,
  },
})
