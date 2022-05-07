<template>
    <div>
        <ul>
            <li v-for='n in newslist' :key="n.id">
                <!-- <router-link :to="`/about/message/details?id=${n.id}&title=${n.title}`">{{n.title}}</router-link> -->
                <!-- parms传参 -->
                <router-link :to="`/about/message/details/${n.id}/${n.title}`">{{n.title}}</router-link>
                <!-- 对象写法 -->
                <!-- <router-link :to="{
                    //path:'/about/message/details',
                    name:'details',
                    query:{
                        id:n.id,
                        title:n.title
                    }
                }">{{n.title}}</router-link> -->
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return{
            newslist:[{
                id:'001',
                title:'news1'
            },
            {
                id:'002',
                title:'news2'
            },
            {
                id:'003',
                title:'news3'
            }]
        }
    }
}
</script>

<style>

</style>