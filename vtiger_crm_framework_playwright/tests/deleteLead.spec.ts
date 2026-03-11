// import { test } from '../fixtures/baseTest';
// import { LeadInfoPage } from '../pages/LeadInfoPage';

// test('@regression @lead Delete Lead', async ({ page, homePage, leadsPage }) => {

//     await page.goto('/');

//     await homePage.clickLeads();

//     await page.click('xpath=(//a[text()="Ajay Kumar"])[1]');

//     const leadInfo = new LeadInfoPage(page);

//     await leadInfo.clickDelete();

//     await leadsPage.verifyLeadsPage();

// });


import { test } from '../fixtures/baseTest';
import { HomePage } from '../pages/HomePage';
import { DeleteLeadPage } from '../pages/DeleteLeadPage';

test('@regression @lead Delete Lead', async ({ page }) => {

    const homePage = new HomePage(page);

    await homePage.clickLeads();

    const deleteLeadPage = new DeleteLeadPage(page);

    await deleteLeadPage.openLead();

    await deleteLeadPage.deleteLead();

});