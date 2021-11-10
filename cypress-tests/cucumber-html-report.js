const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "./reporting/cucumber-json",
    reportPath: "./reporting/cucumber-htmlreport.html",
    metadata: {
        device: {
            name: "Macbook"
        },
        browser: {
            name: "Chrome",
            version: "Latest",
        },
        device: "MacBook Air",
        platform: {
            name: "macOS",
            version: "Big Sur",
        },
    },
});