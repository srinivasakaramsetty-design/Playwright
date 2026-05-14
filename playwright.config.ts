import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  use: {
    headless: false,
    launchOptions: {
    slowMo: 1000
  },
    trace: 'on-first-retry',
  },

  projects: [
  { name: 'chromium', use: { browserName: 'chromium' } }
  

]
});