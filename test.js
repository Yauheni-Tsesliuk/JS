

var webdriver = require('selenium-webdriver');

function searchTextOnGoogle() {
    
    var driver = new webdriver.Builder().forBrowser('chrome').build();
    
    driver.get('https://www.lambdatest.com').then(function()    
    {
        driver.findElement(webdriver.By.linkText('Automation')).click().then(function()
        {
            driver.getTitle().then(function(title)
            {
                console.log(title);
                driver.quit();
                5000;
            });
        });
    });
}

searchTextOnGoogle();