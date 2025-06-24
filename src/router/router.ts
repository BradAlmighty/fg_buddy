import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Home", component: () => import("@/views/Home.vue") },
  {
    path: "/warband",
    name: "Warband",
    component: () => import("@/views/WarbandBuilder.vue"),
  },
  {
    path: "/spells",
    name: "Spells",
    component: () => import("@/views/SpellListMaker.vue"),
  },
  {
    path: "/items",
    name: "Items",
    component: () => import("@/views/ItemReference.vue"),
  },
  {
    path: "/rules",
    name: "Rules",
    component: () => import("@/views/RulesReference.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("@/views/Settings.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
