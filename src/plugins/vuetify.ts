// Styles
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "vuetify/styles";
import { aliases, md } from "vuetify/iconsets/md";

// Vuetify

import { createVuetify } from "vuetify";

export default createVuetify({
  icons: {
    defaultSet: "md",
    aliases,
    sets: {
      md,
    },
  },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
