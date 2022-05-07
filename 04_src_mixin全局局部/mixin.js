export default{
    data(){
        return{
            a:1,
            b:2,
            c:{
                name:'lihuimin',
                age:22
            }
        }
    },
    methods: {
        show(){
            console.log(this);
        }
    },
    mounted() {
        console.log(`组件${this.$name}挂载完毕!`)
    },
}