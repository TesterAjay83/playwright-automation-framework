// import { Page, Locator, expect } from '@playwright/test';
// import { BasePage } from './basePage';

// export class LeadsPage extends BasePage {

//     readonly createLeadBtn: Locator;
//     readonly leadsHeader: Locator;

//     constructor(page) {

//         super(page);

//         this.createLeadBtn = page.locator('img[alt="Create Lead..."]');

//         this.leadsHeader = page.locator('td.moduleName');

//     }

//     async verifyLeadsPage() {

//         await expect(this.createLeadBtn).toBeVisible();

//     }

//     async clickCreateLead() {

//         await this.createLeadBtn.click();

//     }

//     async openLeadByName(name: string) {

//         await this.page.locator(`//a[text()="${name}"]`).first().click();

//     }

// }

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

