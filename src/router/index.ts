import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "HelloWorld",
        component: () =>
            import(/* webpackChunkName: "HelloWorld" */ "../components/HelloWorld.vue")
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a se-parate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "About" */ "../components/About.vue")
    },
    {
        path: "/todo",
        name: "Todo",
        // route level code-splitting
        // this generates a se-parate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "Todo" */ "../view/TodoList.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
