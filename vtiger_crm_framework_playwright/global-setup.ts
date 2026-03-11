
import { chromium, FullConfig } from '@playwright/test';
import { ENV } from './config/env.config';

async function globalSetup(config: FullConfig) {

    const browser = await chromium.launch();

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto(ENV.url);

    await page.fill('input[name="user_name"]', ENV.username);

    await page.fill('input[name="user_password"]', ENV.password);

    await page.click('input[id="submitButton"]');

    await page.waitForLoadState('networkidle');

    await context.storageState({ path: 'storageState.json' });

    await browser.close();
}

export default globalSetup;