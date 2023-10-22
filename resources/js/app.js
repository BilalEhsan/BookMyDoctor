import "./bootstrap";
import "../css/app.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { createApp } from "vue";
import App from "./components/App.vue";
import router from "./router.js";

createApp(App).use(router).mount('#app');
