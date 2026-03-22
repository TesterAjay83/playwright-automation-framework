  
import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';
import { Assert } from '../utils/assertions';

export class CreateLeadPage extends BasePage {

  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly company: Locator;
  readonly saveBtn: Locator;

  constructor(page: Page) {

    super(page);

    this.firstName = page.locator('input[name="firstname"]');

    this.lastName = page.locator('input[name="lastname"]');

    this.company = page.locator('input[name="company"]');

    this.saveBtn = page.locator('input[title="Save [Alt+S]"]').first();

  }

  async createLead(first: string, last: string, company: string) {

await Assert.visible(this.firstName, 'First Name');
  await Assert.visible(this.lastName, 'Last Name');
  await Assert.visible(this.company, 'Company');

    await this.firstName.fill(first);

    await this.lastName.fill(last);

    await this.company.fill(company);
    await Assert.clickable(this.saveBtn, 'Save Button');
    await this.saveBtn.click();

  }

}
