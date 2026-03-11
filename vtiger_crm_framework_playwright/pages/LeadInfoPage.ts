 import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';

export class LeadInfoPage extends BasePage {

    readonly leadHeader: Locator;
    readonly editBtn: Locator;
    readonly deleteBtn: Locator;

    constructor(page: Page) {

        super(page);

        this.leadHeader = page.locator('.dvHeaderText');

      //  this.editBtn = page.locator('input[value="Edit"]');
        this.editBtn = page.locator('input[value="Edit"]').first();

        this.deleteBtn = page.locator('input[value="Delete"]');

    }

    async verifyLeadCreated(name: string) {

        await expect(this.leadHeader).toContainText(name);

    }

    async clickEdit() {

        await this.editBtn.click();

    }

    async clickDelete() {

        this.page.once('dialog', dialog => dialog.accept());

        await this.deleteBtn.click();

    }

}