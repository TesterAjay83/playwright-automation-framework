  
import { test } from '../fixtures/baseTest';
import { DeleteLeadPage } from '../pages/DeleteLeadPage';

test('@regression @lead Delete Lead', async ({ page, homePage }) => {

  await page.goto('/');

  await homePage.clickLeads();

  const deleteLead = new DeleteLeadPage(page);

  await deleteLead.openLead();

  await deleteLead.deleteLead();

});