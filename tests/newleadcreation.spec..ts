import {test,expect} from '@playwright/test'

test("1 Create Lead ", async({page})=>

{
await page.goto("https://login.salesforce.com/?locale=in");
await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com");
await page.locator("#password").fill("TestLeaf@2025")
await page.locator("#Login").click();
//await page.waitForTimeout(12000);
await page.locator(".slds-icon-waffle").click();
await page.locator("//a[@data-label='Sales']").click();
await page.locator("//a[@title='Leads']").click();
await page.locator("//a[@title='New']").click();
await page.locator("//button[@aria-label='Salutation']").click();
await page.locator("//span[@title='Mrs.']").click();

await page.locator("//input[@name='lastName']").fill("Gatty");
await page.locator("//input[@name='Company']").fill("Gatty");
await page.locator("//button[@name='SaveEdit']").click();
//await page.waitForTimeout(3000)
await expect ( page.locator("//slot[@name='primaryField']/lightning-formatted-name")).toHaveText("Mrs.  Gatty");
}

)