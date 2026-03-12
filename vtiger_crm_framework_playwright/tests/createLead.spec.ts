import { test } from '../fixtures/baseTest';
import { CreateLeadPage } from '../pages/CreateLeadPage';
import { LeadInfoPage } from '../pages/LeadInfoPage';
import { leadData } from '../utils/testData';

test.only('@regression @lead Create new Lead', async ({ page, homePage, leadsPage }) => {

    await page.goto('/');

    await homePage.clickLeads();

    await leadsPage.clickCreateLead();

    const createLead = new CreateLeadPage(page);

    await createLead.createLead(

        leadData.firstName,
        leadData.lastName,
        leadData.company

    );

    const leadInfo = new LeadInfoPage(page);

    await leadInfo.verifyLeadCreated(leadData.lastName);

});