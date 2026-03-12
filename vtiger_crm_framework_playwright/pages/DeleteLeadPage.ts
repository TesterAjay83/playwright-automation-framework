  
import { Page, Locator } from '@playwright/test';

export class DeleteLeadPage {

  readonly page: Page;

  readonly leadLink: Locator;

  readonly deleteBtn: Locator;

  constructor(page: Page) {

    this.page = page;

    this.leadLink = page.getByRole('link', { name: 'Ajay' }).first();

    this.deleteBtn = page.locator('input[value="Delete"]').first();

  }

  async openLead() {

    await this.page.waitForSelector('table');

    await this.leadLink.click();

  }

  async deleteLead() {

    this.page.once('dialog', dialog => dialog.accept());

    await this.deleteBtn.click();

  }

}

