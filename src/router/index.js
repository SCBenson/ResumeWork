/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router/auto";
import Home from "@/components/HomeView.vue";
import About from "@/components/about/index.vue";
import AddArticle from "@/components/admin/add_article.vue";
import UpdateArticle from "@/components/admin/update_article.vue";
import RegisterUser from "@/components/users/register.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/admin/add_article", component: AddArticle },
    { path: "/admin/update_article/:id", component: UpdateArticle },
    { path: "/users/register", component: RegisterUser },
  ],
});

// Workaround for https://github.com/vitejs/vite/issues/11804
// router.onError((err, to) => {
//   if (err?.message?.includes?.("Failed to fetch dynamically imported module")) {
//     if (!localStorage.getItem("vuetify:dynamic-reload")) {
//       console.log("Reloading page to fix dynamic import error");
//       localStorage.setItem("vuetify:dynamic-reload", "true");
//       location.assign(to.fullPath);
//     } else {
//       console.error("Dynamic import error, reloading page did not fix it", err);
//     }
//   } else {
//     console.error(err);
//   }
// });

// router.isReady().then(() => {
//   localStorage.removeItem("vuetify:dynamic-reload");
// });

export default router;
