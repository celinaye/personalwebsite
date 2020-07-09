import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },

  {
    path: "/highschool",
    name: "HighSchool",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HighSchool.vue")
  },
  {
    path: "/art",
    name: "Art",
    component: () => import(/* webpackChunkName: "about" */ "../views/Art.vue")
  },
  {
    path: "/resume",
    name: "Resume",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Resume.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
