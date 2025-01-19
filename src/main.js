// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// const mongoConnect = require("./util/database.js");

const app = createApp(App);
// app.use(router);
registerPlugins(app);

app.mount("#app");

// mongoConnect((client) => {
//   console.log(client);
//   app.listen(3000);
// });
