import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';
import { Assert } from '../utils/assertions';


export class LoginPage extends BasePage {

    readonly username: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;

    constructor(page: Page) {

        super(page);

        this.username = this.page.locator('input[name="user_name"]');

        this.password = this.page.locator('input[name="user_password"]');

        this.loginBtn = this.page.locator('#submitButton');

    }

// async verifyLoginPage() {

//   await Assert.visible(this.username, 'Username Field');
//   await Assert.visible(this.password, 'Password Field');
//   await Assert.visible(this.loginBtn, 'Login Button');

//   await Assert.enabled(this.loginBtn, 'Login Button');
//   await Assert.clickable(this.loginBtn, 'Login Button');
// }





    async loadLoginPage(url: string) {

        await this.navigate(url);

    }

    async verifyLoginPage() {

        await expect(this.username).toBeVisible();

        await expect(this.password).toBeVisible();

        await expect(this.loginBtn).toBeVisible();

        await Assert.visible(this.username, 'Username Field');
        await Assert.visible(this.password, 'Password Field');
        await Assert.visible(this.loginBtn, 'Login Button');
        await Assert.enabled(this.loginBtn, 'Login Button');
        await Assert.clickable(this.loginBtn, 'Login Button');

    }

    async login(username: string, password: string) {

        await this.username.fill(username);

        await this.password.fill(password);

        await this.loginBtn.click();

    }

}