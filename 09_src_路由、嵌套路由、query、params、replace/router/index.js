import router from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import message from '../pages/message.vue'
import news from '../pages/news.vue'
import details from '../pages/details.vue'
//暴露路由器
export default new router({
    routes:[
        {
            path:'/about',
            component:About,
            children:[
                {
                    path:'news',
                    component:news
                },
                {
                    path:'message',
                    component:message,
                    children:[
                        {
                            name:'details',
                            path:'details/:id/:title',
                            component:details
                        }
                    ]
                },
                
            ]
        },
        {
            path:'news',
            component:Home
        }
    ]
});