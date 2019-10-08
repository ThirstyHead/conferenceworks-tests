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
