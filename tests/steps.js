/* globals gauge*/
'use strict';
const { openBrowser, closeBrowser, goto, text, $ } = require('taiko');
const assert = require('assert');
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({ headless: headless })
});

afterSuite(async () => {
    await closeBrowser();
});

step(['Goto the ConferenceWorks homepage', 'Goto ConferenceWorks'], async () => {
    await goto('http://localhost:8888');
});

step('Goto <page>', async (page) => {
    await goto(`http://localhost:8888/${page}`);
});

step("Search for <teststring>", async (teststring) => {
    assert.ok(await text(teststring).exists());
});

step("Search for element <e>", async (e) => {
    assert.ok(await $(e).exists());
});

step("Visit and search <table>", async (table) => {
    table.rows.forEach(async (row) => {
      let page = row.cells[0];
      let search = row.cells[1];
      await goto(`http://localhost:8888/${page}`);
      assert.ok(await text(teststring).exists());
    });
});
