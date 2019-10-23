# WebdriverIO CucumberJS Typescript

## Usage
    npm install
    npm run test
    npm run test:debug
    npm run allurereport

## Boilerplate project with CucumberJS configured with typescript
* Allure Reporter
* Typescript PageObjects
* Typescirpt Cucumber step decorators
* Chai For assertions
* ChromeDriver in headless mode
* Helper method to test SSR Apps so that SEO can be verified by looking at page DOM rendered by client and server.
* Vscode launch configuration to debug tests

## Debugging Tests
* `browser.debug()` statement in code and then: `npm run test:debug` this will enalbe debug repl in console window
* Add breakpoints in vscode or debugger statement and run launch configuration in vscode.

### Dependencies
Java must be installed to run allure reports
