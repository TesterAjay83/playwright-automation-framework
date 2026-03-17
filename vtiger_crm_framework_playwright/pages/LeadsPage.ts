  
import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';

export class LeadsPage extends BasePage {

  readonly createLeadBtn: Locator;

  constructor(page: Page) {

    super(page);

    this.createLeadBtn = page.locator('img[alt="Create Lead..."]');

  }

  async verifyLeadsPage() {

    await expect(this.createLeadBtn).toBeVisible();

  }

  async clickCreateLead() {

    await this.createLeadBtn.click();

  }

}