import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import min_css from "./assets/css/mdb.min.css";


createApp(App).use(router).use(min_css).mount("#app");
