import {test,expect} from '@playwright/test'
test("Create individual for sales force", async({page})=>
{
await page.goto("https://login.salesforce.com/");
await page.locator("//div[@id='username_container']//input[@type='email']").fill("dilipkumar.rajendran@testleaf.com")
await page.locator("//label[@for='password']/following-sibling::input[@id='password']").fill("TestLeaf@2025")
await page.locator("//form[@name='login']/input[@type='submit']").click();



}
)