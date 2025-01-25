import * as reporter from "cucumber-html-reporter";

const options = {
  theme: "bootstrap" as "bootstrap", 
  jsonFile: "reports/cucumber-report.json", 
  output: "reports/cucumber-report.html", 
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    "Browser": "Chrome ",
    "Platform": "MacOS",
    "Executed": "Remote",
  },
};

reporter.generate(options);
