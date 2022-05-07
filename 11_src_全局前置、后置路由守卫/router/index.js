import router from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import message from '../pages/message.vue'
import news from '../pages/news.vue'
import details from '../pages/details.vue'
//暴露路由器
const vuerouter = new router({
    routes:[
        {
            path:'/about',
            name:'About',
            component:About,
            children:[
                {
                    name:'News',
                    path:'news',
                    component:news
                },
                {
                    path:'message',
                    name:'message',
                    meta:{
                        isauthor:true,
                    },
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
//全局前置路由守卫 在路由切换前调用
vuerouter.beforeEach((to,from,next)=>{
    console.log('全局前置路由守卫');
    console.log(to,from);
    if(to.name ==='message'){
        if(localStorage.getItem('name') === 'NCEPU'){
            next();
        }else{
            console.log('地点错误');
        }
    }else{
        next();
    }
});
//全局后置路由守卫 路由成功切换后调用
vuerouter.afterEach((to,from)=>{
    document.title = to.name;

});
export default vuerouter;