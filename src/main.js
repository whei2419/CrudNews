import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css"; 


import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());

app.mount("#app");

import "bootstrap/dist/js/bootstrap.js"; 
