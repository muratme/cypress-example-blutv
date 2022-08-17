const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index')(on, config)
    },
    specPattern:'cypress/e2e/BDD-Features',
    excludeSpecPattern: ['*.js', '*.md',]
  },
});
