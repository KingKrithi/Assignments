import {test,expect} from '@playwright/test'

test("Checkbox", async({page})=>
{
await page.goto("https://leafground.com/checkbox.xhtml");
await page.locator("//div[@class='ui-selectbooleancheckbox ui-chkbox ui-widget']/span[contains(text(),'Basic')]").click()
await page.locator("//div[@class='ui-selectbooleancheckbox ui-chkbox ui-widget']/span[text()='Ajax']").click();
expect (await page.locator("//div[@class='ui-growl-message']/span[text()='Checked']")).toBeVisible();
await page.locator("//label[text()='Java']").click();

await page.locator("//div[@id='j_idt87:ajaxTriState']").click();
expect(await page.locator("//div[@class='ui-growl-message']/p[text()='State = 1']")).toHaveText("State = 1");
await page.locator("//div[@id='j_idt87:j_idt100']").click();
expect(await page.locator("//div[@class='ui-growl-message']//span[text()='Checked']")).toHaveText("Checked");
expect(await page.locator("//input[@id='j_idt87:j_idt102_input']")).toBeDisabled();
await page.locator("//div[@class='ui-selectcheckboxmenu-trigger ui-state-default ui-corner-right']").click();
await page.locator("//ul[@role='group']//li/label[text()='Miami']").click()
await page.locator("//ul[@role='group']//li/label[text()='London']").click()
const cities =await page.locator("//ul[@data-label='Cities']/li");
const indexc=await cities.count();
let count=0;
for(let i=0;i<indexc;i++)
{
    if(await cities.nth(i).innerText()==='Miami'||'London ')
    {
         count++;
    }
console.log(await cities.nth(i).innerText());

}
console.log(count);

})