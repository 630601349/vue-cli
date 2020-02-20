<template>
    <div>
        <h1>登录</h1>
        <mt-field placeholder="请输入用户名" v-model="uname"></mt-field>
        <mt-field placeholder="请输入密码" v-model="upwd"></mt-field>
        <mt-button size="large" @click="login">登录</mt-button>
    </div>
</template>


<script>
export default {
    data(){
        return {
            uname:"tom",
            upwd:"123"
        }
    },
    methods:{
        login(){
            let u = this.uname;
            let p = this.upwd;

            let reg = /[a-z0-9]{3,12}/i;

            if(!reg.test(u)){
                this.$messagebox("消息","用户名格式不正确")
            } else if (!reg.test(p)){
                this.$messagebox("消息","密码格式不正确")
            } else {
                this.$toast("登录成功")
                this.$router.push('/')
            }
        }
    }
}
</script>

<style>

</style>