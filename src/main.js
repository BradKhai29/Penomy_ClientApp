import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import min_css from "./assets/css/mdb.min.css";
import my_app_css from "./assets/css/my_app.css";

createApp(App).use(router).use(min_css).use(my_app_css).mount("#app");
