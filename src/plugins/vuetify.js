/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { VStepper } from "vuetify/labs/VStepper";
import { aliases, md } from "vuetify/iconsets/md";
import { mdi } from "vuetify/iconsets/mdi";
import { VDatePicker } from "vuetify/labs/VDatePicker";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
    theme: {
        themes: {
            light: {
                colors: {
                    primary: "#1867C0",
                    secondary: "#5CBBF6",
                },
            },
        },
    },
    components: {
        VStepper,
        VDatePicker,
    },
    icons: {
        defaultSet: "md",
        aliases,
        sets: {
            md,
            mdi,
        },
    },
});
