import {test,expect} from '@playwright/test'
test("Create individual for sales force", async({page})=>
{
await page.goto("https://login.salesforce.com/");
await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com");
await page.locator("#password").fill("TestLeaf@2025")
await page.locator("#Login").click();
await page.locator("//div[@class='slds-icon-waffle']").click();
await page.locator("//input[@placeholder='Search apps and items...']").fill("Individuals")
await page.locator("//b[text()='Individuals']").click();
await page.locator("//span[text()='Individuals List']").click();
await page.locator("//span[text()='New Individual']").click();
await page.locator("//input[@placeholder='Last Name']").fill("koko");
await page.locator("//span[text()='Save']").click();
await page.locator("//a[@title='Individuals']").click();
await page.locator("//input[@name='Individual-search-input']").fill("koko")
await page.locator("//input[@name='Individual-search-input']").press("Enter")
await page.waitForTimeout(2000)
await page.locator("//table[@class='slds-table slds-table_header-fixed slds-table_bordered slds-table_edit slds-table_resizable-cols']//tbody//tr[1]//td[6]").click();
await page.waitForTimeout(2000)
await page.locator("//li[@role='presentation']/a/div[text()='Edit']").click();
await page.locator("//div[@class='salutation compoundTLRadius compoundTRRadius compoundBorderBottom form-element__row uiMenu']").click();
await page.locator("//a[@title='Ms.']").click();
await page.locator("//input[@placeholder='First Name']").fill("lit");
await page.locator("//button[@title='Save']//span[text()='Save']").click();
await page.locator("//input[@name='Individual-search-input']").fill("lit koko")
await page.locator("//input[@name='Individual-search-input']").press("Enter")
await page.locator("//a[@title='lit koko']").click();
//expect(await page.locator("//div[@class='slds-page-header__title slds-m-right--small slds-align-middle slds-line-clamp clip-text']//span[text()='lit koko']")).toHaveText("lit koko")
await page.locator("//div[@title='Delete']").click();
await page.locator("//span[text()='Delete']").click();



})