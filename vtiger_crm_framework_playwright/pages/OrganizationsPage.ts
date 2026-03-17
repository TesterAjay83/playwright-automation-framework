
import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from "./basePage";

// Create organization button click
// Organization search
// Organization select

 
export class OrganigetionPage extends BasePage {

readonly createOrganigetionButton : Locator;

constructor(page:Page){
 super(page);

this.createOrganigetionButton = page.locator("//img[@title='Create Organization...']");

}

async verifyOrganigetionPage(){

    await expect(this.createOrganigetionButton).toBeVisible();
 }

 async clickCreateOrganigetion(){

    await this.createOrganigetionButton.click();

 }

    
}