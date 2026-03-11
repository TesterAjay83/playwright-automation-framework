import { Page, Locator, expect } from '@playwright/test';

export class DeleteLeadPage {

    readonly page: Page;
    readonly leadLink: Locator;
    readonly deleteBtn: Locator;

    constructor(page: Page) {

        this.page = page;

        // Lead name link
        this.leadLink = page.getByRole('link', { name: 'Ajay Kumar' }).first();

        // Delete button on Lead detail page
        this.deleteBtn = page.locator('input[value="Delete"]').first();

    }

    async openLead() {

        // Wait for leads table to load
        await this.page.waitForSelector('table');

        // Click lead
        await this.leadLink.click();

    }

    async deleteLead() {

        // Click delete button
        await this.deleteBtn.click();

        // Accept alert popup
        this.page.on('dialog', async dialog => {
            await dialog.accept();
        });

    }

}