import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import * as netlifyIdentity from "netlify-identity-widget";

netlifyIdentity.init({
  APIUrl: "",
  locale: "en",
});

createApp(App).mount("#app");
