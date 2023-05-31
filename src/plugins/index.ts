// Plugins
import vuetify from "./vuetify";
import { loadFonts } from "./webfontloader";

// Types
import type { App } from "vue";

export function registerPlugins(app: App) {
  loadFonts();
  app.use(vuetify);
}
