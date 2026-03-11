import { test, expect } from '../fixtures/baseTest';

test('@smoke @login Verify vtiger login', async ({ page, homePage }) => {

    await page.goto('/');

    await homePage.verifyHomePage();

});