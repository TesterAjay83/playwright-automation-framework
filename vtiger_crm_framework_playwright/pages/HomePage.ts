  
import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';

export class HomePage extends BasePage {

  readonly leadsLink: Locator;
  readonly homeLogo: Locator;
  readonly orgnigetionLink: Locator;

  constructor(page: Page) {

    super(page);

    this.leadsLink = page.locator('a[href="index.php?module=Leads&action=index"]');

    this.orgnigetionLink = page.locator("//a[text()='Organizations']").first();
    this.homeLogo = page.locator('img[src*="vtiger-crm-logo"]');
  }

  async verifyHomePage() {

    await expect(this.homeLogo).toBeVisible();

  }

  async clickLeads() {

    await Promise.all([
      this.page.waitForLoadState('domcontentloaded'),
      this.leadsLink.click()
    ]);

  }


async clickOrganizations(){

 await Promise.all([
      this.page.waitForLoadState('domcontentloaded'),
      this.orgnigetionLink.click()]);

}






}

