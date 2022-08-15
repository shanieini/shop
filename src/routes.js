import { Homepage } from './pages/homepage.jsx'
import { Shop } from './pages/shop'

export const routes = [
    {
        path: '/',
        component: Homepage,
    },
    {
        path: '/shop',
        component: Shop,
    }
]