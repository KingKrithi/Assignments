import {test , expect} from '@playwright/test'

test("Radiobuttons", async({page})=>
{
await page.goto("https://leafground.com/radio.xhtml");
expect(await page.locator("//input[@id='j_idt87:console2:2']")).toBeChecked();
expect(await page.locator("//input[@id='j_idt87:age:1']")).toBeChecked();
await page.locator("//label[@for='j_idt87:console1:0']").click();
expect (page.locator("//label[@for='j_idt87:console1:0']")).toBeChecked();
await page.locator("//label[@for='j_idt87:city2:1']").click();
await page.locator("//label[@for='j_idt87:age:2']").click();
expect(await page.locator("//input[@id='j_idt87:age:1']")).not.toBeChecked();



})
