# Demoblaze Page Automation

## Description
Automation framework using WebdriverIO, JS, and Allure reporter, to test the web page: https://www.demoblaze.com/index.html.

## Setup
1. Download or clone the project.
2. Run ```npm install```.
3. The project has already some commands for run tests you can start with ```npm test```

    -If you want to run test with Chrome browser run ```npm run chrome-execution```

    -If you want to run test with Firefox browser run ```npm run firefox-execution```

     -If you want to run test with Chrome headless browser run ```npm run chrome-headless-execution```

    -If you want to run test with Firefox headless browser run ```npm run firefox-headless-execution```

    -If you want to run smoke run ```npm run smoke-execution```
    
    -If you want to run regression run ```npm run regression-execution```

    -For check test results after execute any of the commands previously mentioned run ```allure serve```

    -For clean up test results run ```npm run allure-clean```

## Documentation
- [WebdriverIO](https://webdriver.io/es/docs/gettingstarted)
- [Allure](https://docs.qameta.io/allure/)