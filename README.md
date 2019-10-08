# conferenceworks-tests

A test suite for ConferenceWorks.

This test suites uses [Gauge](https://gauge.org) and [Taiko](https://taiko.gauge.org).

## Installation

1. Clone this repository

```shell
git clone git@github.com:ThirstyHead/conferenceworks-tests.git
```

2. Install Gauge and Taiko

```shell
npm install -g gauge
npm install -g taiko
```

3. Install dependencies

```shell
cd conferenceworks-tests
npm install
```

## Running Gauge Test Suite

To run the Gauge test suite:

```shell
$ gauge test
```

To view the resulting report:

```shell
$ open reports/html-report/index.html
```

## Adding new tests

Look in `/specs` for your Markdown-based Specifications. You can create a new Specification by creating a new file with a `.spec` file extension, or simply add new Scenarios to the existing `example.spec` file. 

```shell
$ ll specs/
total 8
drwxr-xr-x   3 scott  staff   96 Oct  8 11:44 .
drwxr-xr-x  14 scott  staff  448 Oct  8 11:46 ..
-rw-r--r--   1 scott  staff  346 Oct  8 11:44 example.spec
```

`example.spec`:

```markdown
# Getting Started with Gauge

This is an executable specification file. This file follows markdown syntax. Every heading in this file denotes a scenario. Every bulleted point denotes a step.
To execute this specification, use
	npm test

## Search Taiko Repository

* Goto getgauge github page
* Search for "Taiko"
* Page contains "getgauge/taiko"
```



Look in `/code` for your Taiko/JavaScript-based step implementations. You can create a new file of step implementations by creating a new file with a `.js` file extension, or you can simply add additional steps to the existing `step_implementations.js` file.  

```shell
$ ll tests/
total 8
drwxr-xr-x   3 scott  staff   96 Oct  8 11:44 .
drwxr-xr-x  14 scott  staff  448 Oct  8 11:46 ..
-rw-r--r--   1 scott  staff  730 Oct  8 11:44 step_implementation.js
```

`step_implementation.js`:

```javascript
/* globals gauge*/
"use strict";
const { openBrowser,write, closeBrowser, goto, press, text, focus, textBox, toRightOf } = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({ headless: headless })
});

afterSuite(async () => {
    await closeBrowser();
});

step("Goto getgauge github page", async () => {
    await goto('https://github.com/getgauge');
});

step("Search for <query>", async (query) => {
    await focus(textBox(toRightOf('Pricing')))
    await write(query);
    await press('Enter');
});

step("Page contains <content>", async (content) => {
    assert.ok(await text(content).exists());
});

```
