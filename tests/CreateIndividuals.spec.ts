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

//await page.locator("//span/p[text()='Individuals']").click();
await page.locator("//a[@class='slds-button slds-button_reset']/span[contains(text(),'Individuals List')]").click()
await page.waitForTimeout(4000)
await page.locator("//span[contains(text(),'New Individual')]").click();
await page.locator("//input[@placeholder='Last Name']").fill("Reyu");
await page.locator("//span[text()='Save']").click();
await expect(page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']")).toBeVisible();
await page.waitForTimeout(4000)
await expect(page.locator("//div[@title='Reyu']")).toHaveText("Reyu");
//update
await page.locator("//a[@title='Individuals']").click();
await page.locator("//input[@placeholder='Search this list...']").click
await page.locator("//input[@placeholder='Search this list...']").fill("Reyu");
await page.locator("//input[@placeholder='Search this list...']").press("Enter");
await page.waitForTimeout(4000)
/*
await page.locator("//li[@class='slds-dropdown__item uiMenuItem']//a[@title='Edit']").click();
await page.locator("//div[@class='salutation compoundTLRadius compoundTRRadius compoundBorderBottom form-element__row uiMenu']").click()
await page.locator("//a[@title='Mr.']").click();
await page.locator("//input[@placeholder='First Name']").fill("Kit");
await page.locator("//span[text()='Save']").click();
*/
}
)