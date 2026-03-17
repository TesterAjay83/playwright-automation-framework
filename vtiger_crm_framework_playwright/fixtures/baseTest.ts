import { test as base, expect } from '@playwright/test';   /// expect - assertion ke liye use hota hai (verify karne ke liye)

import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { LeadsPage } from '../pages/LeadsPage';

type MyFixtures = {

    loginPage: LoginPage;

    homePage: HomePage;

    leadsPage: LeadsPage;

};

export const test = base.extend<MyFixtures>({  ///   base.extend  - Playwright ke default test ko extend kar rahe hain

    loginPage: async ({ page }, use) => {

        await use(new LoginPage(page));

    },

    homePage: async ({ page }, use) => {

        await use(new HomePage(page));

    },

    leadsPage: async ({ page }, use) => {

        await use(new LeadsPage(page));

    }

});

export { expect };