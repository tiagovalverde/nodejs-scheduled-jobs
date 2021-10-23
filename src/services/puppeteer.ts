import { Page } from "puppeteer";

const puppeteer = require('puppeteer');

async function startBrowser() {
    let browser;
    try {
        browser = await puppeteer.launch({
            headless: true,
            args: ["--disable-setuid-sandbox"],
            'ignoreHTTPSErrors': true
        });
    } catch (err) {
        console.log("Could not create a browser instance => : ", err);
    }
    return browser;
}

// TODO: move puppeteer actions to own file puppeeter-actions.ts
async function getText(page: Page, selector: string) {
    // wait to show
    await page.waitForSelector(selector);
    // get element
    const element = await page.$(selector);
    // fetch & return text
    return await page.evaluate((element: any) => element.textContent, element);
}

interface ActionTypes {
  [index: string]: any,
}

const actionTypes: ActionTypes = {
    'GET_TEXT': getText
}

export default {
    startBrowser,
    actionTypes
};