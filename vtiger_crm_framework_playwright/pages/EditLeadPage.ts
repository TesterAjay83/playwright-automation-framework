  

import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class EditLeadPage extends BasePage {

  readonly companyField: Locator;

  readonly saveBtn: Locator;

  constructor(page: Page) {

    super(page);

    this.companyField = page.locator('input[name="company"]');

    this.saveBtn = page.locator('input[title="Save [Alt+S]"]').first();
    //this.saveBtn = page.locator('input[title="Save [Alt+S]"]').;

  }

  async updateCompany(newCompany: string) {

    await this.companyField.clear();

    await this.companyField.fill(newCompany);

    await this.saveBtn.click();

  }

}