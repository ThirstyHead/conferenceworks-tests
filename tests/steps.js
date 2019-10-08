/* globals gauge*/
'use strict';
const { openBrowser, closeBrowser, goto, text } = require('taiko');
const assert = require('assert');
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({ headless: headless })
});

afterSuite(async () => {
    await closeBrowser();
});

step('Goto the ConferenceWorks homepage', async () => {
    await goto('http://localhost:8888');
});

step("Search for <teststring>", async (teststring) => {
    assert.ok(await text(teststring).exists());
});
