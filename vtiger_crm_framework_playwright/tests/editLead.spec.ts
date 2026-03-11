import { test } from '../fixtures/baseTest';
import { LeadInfoPage } from '../pages/LeadInfoPage';
import { EditLeadPage } from '../pages/EditLeadPage';

test('@regression @lead Edit Lead', async ({ page, homePage, leadsPage }) => {

    await page.goto('/');

    await homePage.clickLeads();

    await page.click('xpath=(//a[text()="Ajay Kumar"])[1]');

    const leadInfo = new LeadInfoPage(page);

    await leadInfo.clickEdit();

    const editPage = new EditLeadPage(page);

    await editPage.updateCompany("Microsoft");

});