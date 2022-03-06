import {createRouter, createWebHistory} from "vue-router";

import Index from "./pages/index.vue";
import About from "./pages/about.vue";
import Products from "./pages/products.vue";
import Checkout from "./pages/checkout.vue";
import Login from "./pages/login.vue";
import NotFound from "./pages/404.vue";

const routes = [
    {
    path: "/",
    name: "Index",
    component: Index,
},
{
    path: "/about",
    name: "About",
    component: About,
},
{
    path: "/products",
    name: "Products",
    component: Products,
},
{
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
},
{
    path: "/login",
    name: "Login",
    component: Login,
},
{
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
},

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;