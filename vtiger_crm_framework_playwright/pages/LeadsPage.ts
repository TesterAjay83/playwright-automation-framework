  
import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';
import { Assert } from '../utils/assertions';

export class LeadsPage extends BasePage {

  readonly createLeadBtn: Locator;

  constructor(page: Page) {

    super(page);

    this.createLeadBtn = page.locator('img[alt="Create Lead..."]');

  }

  async verifyLeadsPage() {
    await expect(this.createLeadBtn).toBeVisible();
 await Assert.visible(this.createLeadBtn, 'Create Lead Button');
  await Assert.clickable(this.createLeadBtn, 'Create Lead Button');

  }

  async clickCreateLead() {

    await this.createLeadBtn.click();

  }

}