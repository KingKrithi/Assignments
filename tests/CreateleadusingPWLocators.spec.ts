import {test,expect} from '@playwright/test'

test("Lead creation by locators" , async({page})=>
{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.getByRole("textbox",{name:'Username'}).fill("Demosalesmanager");
await page.getByRole("textbox",{name:'Password'}).fill("crmsfa")
await page.getByRole("button",{name:'Login'}).click();
await page.getByText("CRM/SF").click();
await page.getByRole("link",{name:'Leads'}).click();
await page.locator("//li/a[text()='Create Lead']").click();
await page.getByText("Company Name").fill("Gatty")
await page.locator("#createLeadForm_firstName").fill("KrithiV")
await page.locator('#createLeadForm_lastName').fill("Lalith")
await page.locator("#createLeadForm_personalTitle").fill("ms")
await page.locator("#createLeadForm_generalProfTitle").fill("AB")
await page.locator("//input[@name='annualRevenue']").fill("200000")
await page.locator("#createLeadForm_departmentName").fill("Computer")
await page.locator("#createLeadForm_primaryPhoneNumber").fill("9867543444");
await page.locator("//input[@class='smallSubmit']").click();

})