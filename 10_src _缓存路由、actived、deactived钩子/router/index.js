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
                            path:'details',
                            component:details,
                            props($route){
                                return{
                                    id:$route.query.id,
                                    title:$route.query.title,
                                    pid:$route.params.id,
                                    ptitle:$route.params.title
                                }
                            }
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