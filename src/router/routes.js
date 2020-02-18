import Miste from '../pages/Miste/Miste.vue'
import Classify from '../pages/Classify/Classify.vue'
import DeserveBuy from '../pages/DeserveBuy/DeserveBuy.vue'
import MiShoppingCartste from '../pages/ShoppingCart/ShoppingCart.vue'
import Profile from '../pages/Profile/Profile.vue'

export default [
    {
        path:'/miste',
        component:Miste
    },
    {
        path:'/classify',
        component:Classify
    },
    {
        path:'/deservebuy',
        component:DeserveBuy
    },
    {
        path:'/mishoppingcartste',
        component:MiShoppingCartste
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/',
        redirect:'/miste'
    }
]