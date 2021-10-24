import { Page } from "puppeteer";

interface ActionTypes {
  [index: string]: any,
}

async function getText(page: Page, selector: string) {
  // wait to show
  await page.waitForSelector(selector);
  // get element
  const element = await page.$(selector);
  // fetch & return text
  return await page.evaluate((element: any) => element.textContent, element);
}

export const actionTypes: ActionTypes = {
  'GET_TEXT': getText
}