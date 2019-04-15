import Vue from "vue";
import { firestorePlugin } from "vuefire";
import Router from "vue-router";
import Vuex from "vuex";
import VueMaterial from "vue-material";
import Login from "@/components/pages/Login";
import Signup from "@/components/pages/Signup";
import Statistics from "@/components/pages/Statistics";
import MemoHistory from "@/components/pages/MemoHistory";
import MemoTrash from "@/components/pages/MemoTrash";
import MemoModification from "@/components/pages/MemoModification";
import GlobalHeader from "@/components/organisms/GlobalHeader";
import "firebase/firestore";

Vue.use(firestorePlugin);
Vue.use(Router);
Vue.use(Vuex);
Vue.use(VueMaterial);

const router = new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: { isPublic: true }
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup,
      meta: { isPublic: true }
    },
    {
      path: "/browse",
      component: GlobalHeader,
      props: true,
      children: [
        {
          path: "memo-history",
          name: "memoHistory",
          component: MemoHistory,
          props: true
        },
        {
          path: "memo-trash",
          name: "memoTrash",
          component: MemoTrash,
          props: true
        }
      ]
    },
    {
      path: "/memo/modification/:memoId?",
      name: "memoModification",
      component: MemoModification
    },
    {
      path: "/browse",
      component: GlobalHeader,
      props: true,
      children: [
        {
          path: "statistics",
          name: "statistics",
          component: Statistics,
          props: true
        }
      ]
    },
    // catch all redirect
    {
      path: "*",
      redirect: "/login"
    }
  ]
});

export default router;
