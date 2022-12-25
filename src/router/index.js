import {createRouter, createWebHistory} from 'vue-router'
import Index from '../views/Index.vue'
import Button from '../views/Button.vue'
import Typography from '../views/Typography.vue'
import Checkbox from '../views/Checkbox.vue'
import Radiobutton from '../views/Radiobutton.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
       {
        path: '/',
        name: 'Index',// изменить
        component: Index
       },
       {
        path: '/button',
        name: 'Button',// изменить
        component: Button
       },
       {
        path: '/typography',
        name: 'Typography',// изменить
        component: Typography
       },
       {
        path: '/checkbox',
        name: 'Checkbox',// изменить
        component: Checkbox
       },
       {
        path: '/radiobutton',
        name: 'Radiobutton',// изменить
        component: Radiobutton
       },
    ]
})

export default router;