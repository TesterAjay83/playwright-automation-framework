 
import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';

export class HomePage extends BasePage {

    readonly leadsLink: Locator;
    readonly homeLogo: Locator;

    constructor(page: Page) {

        super(page);

        this.leadsLink =
            this.leadsLink = this.page.locator('a[href="index.php?module=Leads&action=index"]');
        this.homeLogo =
            this.page.locator('img[src*="vtiger-crm-logo"]');

    }

    async verifyHomePage() {

        await expect(this.leadsLink).toBeVisible();

    }

    async clickLeads() {

        await this.leadsLink.click();

    }

}

