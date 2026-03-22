import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  workers: 1,          
  fullyParallel: false, 


  timeout: 120000,

  globalSetup: './global-setup.ts',

  use: {

    baseURL: 'http://localhost:8888/',

    storageState: 'storageState.json',

    headless: false,

    actionTimeout: 60000,

    navigationTimeout: 120000,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure'

  },

   reporter: [
    ['list'],
    ['list'],
    ['html'],
    ['allure-playwright']
  ]
   
   

});

