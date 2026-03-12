 


import { test } from '../fixtures/baseTest';
import { LeadInfoPage } from '../pages/LeadInfoPage';
import { EditLeadPage } from '../pages/EditLeadPage';

test('@regression @lead Edit Lead', async ({ page, homePage }) => {

  await page.goto('/');

  await homePage.clickLeads();

  await page.getByRole('link', { name: 'Ajay' }).first().click();
  //await page.click('text=Ajay');

  const leadInfo = new LeadInfoPage(page);

  await leadInfo.clickEdit();

  const editPage = new EditLeadPage(page);

  await editPage.updateCompany('Microsoft');

});