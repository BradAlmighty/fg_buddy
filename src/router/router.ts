import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Home", component: () => import("@/Views/Home.vue") },
  {
    path: "/warband",
    name: "Warband",
    component: () => import("@/Views/WarbandBuilder.vue"),
  },
  {
    path: "/spells",
    name: "Spells",
    component: () => import("@/Views/SpellListMaker.vue"),
  },
  {
    path: "/items",
    name: "Items",
    component: () => import("@/Views/ItemReference.vue"),
  },
  {
    path: "/rules",
    name: "Rules",
    component: () => import("@/Views/RulesReference.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("@/Views/Settings.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
