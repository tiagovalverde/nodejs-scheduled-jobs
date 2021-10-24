import { actionTypes } from "./actions";

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

export default {
    startBrowser,
    actionTypes
};