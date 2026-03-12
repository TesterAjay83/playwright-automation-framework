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