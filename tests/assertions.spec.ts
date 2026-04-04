import {test,expect} from '@playwright/test'

test("Assertions", async({page})=>
{

await page.goto("https://leafground.com/input.xhtml");
await expect(page.getByPlaceholder("Disabled")).toBeDisabled();
await expect(page.getByPlaceholder("Babu Manickam")).toBeEditable();
await page.getByPlaceholder("Babu Manickam").fill("Krithi")
//await expect.soft(page.locator("//label[text()='Username']")).toBeDisabled()
console.log("Soft assertion passed")
await page.locator("//input[@value='Chennai']").fill("Playwright learning")
})