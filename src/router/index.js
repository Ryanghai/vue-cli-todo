import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import All from "../views/All.vue";
import Todo from "../views/Todo.vue";
import Inprogress from "../views/Inprogress.vue";
import Waiting from "../views/Waiting.vue";
import Done from "../views/Done.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/all",
    name: "All Tasks",
    component: All,
  },
  {
    path: "/todo",
    name: "To do",
    component: Todo,
  },
  {
    path: "/inprogress",
    name: "Inprogress",
    component: Inprogress,
  },
  {
    path: "/waiting",
    name: "Waiting",
    component: Waiting,
  },
  {
    path: "/done",
    name: "Done",
    component: Done,
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
