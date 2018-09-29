import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import World from "@/components/word";
Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            name: "HelloWorld",
            component: HelloWorld
        },
        {
            path: "/World",
            name: "World",
            component: World
        }
    ]
});