import Vue from 'vue'
import Router from 'vue-router'
import Login from "../Login";
import Register from "../Register";
import Dashboard from "../Dashboard";
import TodoList from "../TodoList";
import Home from "../Home";

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/todo',
            name: 'todo',
            component: TodoList
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard
        }
    ]
});
export default router