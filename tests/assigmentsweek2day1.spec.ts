import {test,chromium, webkit} from '@playwright/test'
import { channel } from 'node:diagnostics_channel';
test("Red bus",async()=>

{
  const browser=  await chromium.launch({channel:"msedge"});
 const context =  await  browser.newContext();
 const page=await context.newPage();
 await page.goto("https://www.redbus.in/");
const redbustitle= await page.title();
console.log(redbustitle)
const redbusurl= page.url();
console.log(redbusurl)
}
)

test("Flipkart",async()=>

{
  const browser=  await webkit.launch()
 const context =  await  browser.newContext();
 const page=await context.newPage();
 await page.goto("https://www.flipkart.com/");
const flipkarttitle= await page.title();
console.log(flipkarttitle)
const flipkarturl= page.url();
console.log(flipkarturl)
}
)