// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {    
    browserName: 'chromium',
    headless: false
  },
  // You can also set other options such as timeout, retries, etc.
  timeout: 60000,
  retries: 1,
});
