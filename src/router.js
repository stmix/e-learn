import { createRouter, createWebHistory } from "vue-router";
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import MainPage from './components/MainPage.vue'

const routes  =[
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/home', component: MainPage}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;