import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';

export class LeadsPage extends BasePage {

    readonly createLeadBtn: Locator;

    constructor(page: Page) {

        super(page);

        this.createLeadBtn =
            this.page.locator('img[alt="Create Lead..."]');

    }

    async verifyLeadsPage() {

        await this.page.waitForLoadState('domcontentloaded');

        await expect(this.createLeadBtn).toBeVisible({ timeout: 30000 });

    }

    async clickCreateLead() {

        await this.page.waitForLoadState('domcontentloaded');

        await this.createLeadBtn.click();

    }

}

