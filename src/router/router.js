import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/home/Home";
Vue.use(VueRouter)

const routes = [
    {path: '',name:"stockEdit",component: Home,meta: {index: 0}},
    {path: '/home',name:"stockEdit",component: Home,meta: {index: 0}},
]
/*实例化路由*/
const router = new VueRouter({
    routes:routes, // （简写）相当于 routes: routes
});

/*导出路由模块*/
export default router