 import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';

export class EditLeadPage extends BasePage {

    readonly companyField: Locator;
    readonly saveBtn: Locator;

    constructor(page: Page) {

        super(page);

        this.companyField = this.page.locator('input[name="company"]');

        this.saveBtn = this.page.locator('input[title="Save [Alt+S]"]');

    }

    async verifyEditPage() {

        await expect(this.saveBtn).toBeVisible();

    }

    async updateCompany(newCompany: string) {

        await this.companyField.fill(newCompany);

        await this.saveBtn.click();

    }

}