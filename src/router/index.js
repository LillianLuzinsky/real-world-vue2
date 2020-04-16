import Vue from "vue";
import VueRouter from "vue-router";
import EventCreate from "../pages/EventCreate.vue";
import EventList from "../pages/EventList.vue";
import EventShow from "../pages/EventShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList
  },
  {
    path: "/event",
    name: "event-show",
    component: EventShow
  },
  {
    path: "/event/create",
    name: "event-create",
    component: EventCreate
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
