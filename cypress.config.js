const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  supportFile: false,
  reporter: 'mochawesome',
  reporterOptions:{
    charts: true,
    embeddedScreenshots:true
  },
  e2e: {
    specPattern:'cypress/e2e/**/*.feature',
    projectId: "wkv5u3",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber());
    },
  },
  
});
