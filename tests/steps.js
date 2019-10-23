/* globals gauge*/
'use strict';
const { openBrowser, closeBrowser, goto, text, $, intercept } = require('taiko');
const assert = require('assert');
const headless = process.env.headless_chrome.toLowerCase() === 'true';

let conferenceWorksUrl = "https://thirstyhead.com/conferenceworks/";

beforeSuite(async () => {
    await openBrowser({ headless: headless })
});

afterSuite(async () => {
    await closeBrowser();
});

step(['Goto the ConferenceWorks homepage', 'Goto ConferenceWorks'], async () => {
    await goto(conferenceWorksUrl);
});

step('Goto <page>', async (page) => {
    await goto(`${conferenceWorksUrl}${page}`);
});

step("Search for <teststring>", async (teststring) => {
    assert.ok(await text(teststring).exists());
});

step("Search for element <e>", async (e) => {
    assert.ok(await $(e).exists());
});

step("Visit and search <table>", async (table) => {
    // NOTE: Do not use forEach with async calls
    // table.rows.forEach(async (row) => {
    for(let row of table.rows){
      let page = row.cells[0];
      let search = row.cells[1];
      gauge.message(`About to visit ${page}`);
      await goto(`${conferenceWorksUrl}${page}`);
      assert.ok(await text(search).exists());
    }
});

step("Mock Schedule microservice", async function() {
    let mockJson = {"sessions": [
            {
                "slot": "gh-1",
                "talk": "Fun with Cheese",
                "speaker": "Scott"
            }
        ]};

    await intercept("/conferenceworks/schedule/schedule.json", { "body": JSON.stringify(mockJson)});
});