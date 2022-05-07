<template>
  <div>
      <student1 v-for='student in students' :key="student.name" :name='student.name' :age='student.age' :location="student.location" />
      
  </div>
</template>

<script>
import student1 from './student.vue'
// 等同于import {default as student1} from './student.vue'
export default {
    name:'school',
    data(){
        return{
            students:[{
                name:'李辉民',
                age:'22',
                location:'新乡'
            },{
                name:'高少飞',
                age:'22',
                location:'石家庄'
            },{
                name:'周海',
                age:'22',
                location:'惠州'
            },{
                name:'鲁雪松',
                age:'23',
                location:'贵阳'
            },]
        }
    },
    components:{
        student1
    }
}
</script>

<style>

</style>