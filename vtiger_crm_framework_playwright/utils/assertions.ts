 
 import { expect, Locator, test } from '@playwright/test';

export class Assert {

  static async visible(element: Locator, name: string) {
    await test.step(`Verify ${name} is visible`, async () => {
      await expect(element).toBeVisible();
    });
  }

  static async enabled(element: Locator, name: string) {
    await test.step(`Verify ${name} is enabled`, async () => {
      await expect(element).toBeEnabled();
    });
  }

  static async text(element: Locator, expected: string, name: string) {
    await test.step(`Verify ${name} text = ${expected}`, async () => {
      await expect(element).toHaveText(expected);
    });
  }

  static async containsText(element: Locator, text: string, name: string) {
    await test.step(`Verify ${name} contains ${text}`, async () => {
      await expect(element).toContainText(text);
    });
  }

  static async clickable(element: Locator, name: string) {
    await test.step(`Verify ${name} is clickable`, async () => {
      await expect(element).toBeVisible();
      await expect(element).toBeEnabled();
    });
  }
}