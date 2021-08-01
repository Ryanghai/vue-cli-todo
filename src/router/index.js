import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import All from "../views/All.vue";
import Todo from "../views/Todo.vue";
import Inprogress from "../views/Inprogress.vue";
import Waiting from "../views/Waiting.vue";
import Done from "../views/Done.vue";
import SPTodoMemo from "../views/SPTodoMemo.vue";
import SPInprogressMemo from "../views/SPInprogressMemo.vue";

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
  {
    path: "/sp-todo-memo",
    name: "SPTodoMemo",
    component: SPTodoMemo,
  },
  {
    path: "/sp-inprogress-memo",
    name: "SPInprogressMemo",
    component: SPInprogressMemo,
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
