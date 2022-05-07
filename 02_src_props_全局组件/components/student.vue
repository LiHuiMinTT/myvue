<template>
  <div @click="showS">
      学生姓名:{{Sname}},学生年龄{{Sage}}，学生位置{{Slocation}}
      <bascomp/>
      <hr>
  </div>
</template>

<script>
export default {
    name:'student',
    data(){
        return {
            Sname:this.name,
            Sage:this.age,
            Slocation:this.location
        }
    },
    props:['name','age','location'],
    methods:{
        showS(){
            alert(this.name + this.age + this.location)
        }
    }
}
</script>

<style>

</style>