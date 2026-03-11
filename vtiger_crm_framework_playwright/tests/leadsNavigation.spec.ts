 import { test } from '../fixtures/baseTest';

test('@smoke @lead Navigate to Leads page', async ({ page, homePage, leadsPage }) => {

    await page.goto('/');

    await homePage.clickLeads();

    await leadsPage.verifyLeadsPage();

});