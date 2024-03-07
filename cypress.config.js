const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
const cypressOnFix = require('cypress-on-fix');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  
  e2e: {
    specPattern:'cypress/e2e/**/*.feature',
    projectId: "wkv5u3",
    async setupNodeEvents(on, config) {
      on = cypressOnFix(on);

      require('cypress-mochawesome-reporter/plugin')(on);

      
      // implement node event listeners here
      on(
        'file:preprocessor',
        cucumber()
      );
      
    },
    
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  retries: 1,
  reporterOptions:{
    charts: true,
    embeddedScreenshots:true
  },
  },
  
});
