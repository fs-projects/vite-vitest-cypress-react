import { defineConfig } from "cypress";
// import customViteConfig from "./vite.config";

export default defineConfig({
  // e2e: {
  //   specPattern: "cypress/e2e/tests/**/*.cy.ts",
  // },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      // optionally pass in vite config
      //   viteConfig: customViteConfig,
      // or a function - the result is merged with
      // any `vite.config` file that is detected
      //   viteConfig: async () => {
      //     // ... do things ...
      //     const modifiedConfig = await injectCustomConfig(baseConfig);
      //     return modifiedConfig;
      //   },
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // baseUrl: "http://localhost:5173",
  },
});
