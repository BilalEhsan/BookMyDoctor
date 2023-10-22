import { createRouter, createWebHistory } from "vue-router";

import Login from "./components/Login.vue";
import NotFound from "./components/NotFound.vue";
// import Dashboard from "./components/Dashboard.vue";

const routes = [
    {
        path: "/",
        component: Login,
        name: "login",
    },
    {
        path: "/:pathMatch(.*)*",
        component: NotFound,
    },
    // {
    //     path: "/dashboard",
    //     component: Dashboard,
    //     name: "dashboard",
    //     meta: { requiresAuth: true }, // Requires authentication to access
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.beforeEach((to, from, next) => {
    const isAuthenticated = true; // Check if the user is authenticated
    if (
        // to.matched.some((record) => record.meta.requiresAuth) &&
        !isAuthenticated
    ) {
        next({ name: "login" });
    } else {
        next();
    }
});

export default router;

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: () => import('@/views/Home.vue'),
//   },
//   {
//     path: '/about',
//     name: 'About',
//     component: () => import('@/views/About.vue'),
//   },
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// export default router;
