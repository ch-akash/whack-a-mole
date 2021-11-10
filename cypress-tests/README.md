# Tests for whack-a-mole app
## 

```This test project covers Cypress tests for 'whack-a-mole'```

## Precondition:
``whack-a-mole`` app is up and running

##
##

## CLI Commands

```bash
# Install dependencies
npm install

# Run tests in Electron
npm run-script cy:run

# Run tests in Google Chrome (assuming it is installed)
npm run-script cy:run:chrome

# Generate test reports
node cucumber-html-report.js

# Open generated index.html from above command in browser to view cucumber report
# For Mac, run following command at root level
open reporting/cucumber-htmlreport.html/index.html
```