
import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from "./basePage";

// Ye Create Organization form page hoga.
// Yaha actions honge:

// organization name enter

// phone

// email

// industry select

// save button
// enterOrganizationName()
//    → enterPhone()
//    → selectIndustry()
//    → clickSave()

export class OrganigetionPage extends BasePage {

readonly orgnName: Locator;
readonly webSiteName: Locator;
    constructor(page:Page){
super(page);
this.orgnName= this.page.locator("//input[@name='accountname']");
this.webSiteName= this.page.locator("//input[@name='website']");
this.orgnName= this.page.locator("");
this.orgnName= this.page.locator("");



    }
    




}