<template>
    <div>
        <h1>注册</h1>
        <mt-field placeholder="请输入用户名" v-model="uname"></mt-field>
        <mt-field placeholder="请输入密码" v-model="upwd"></mt-field>
        <mt-field placeholder="请再次输入密码" v-model="cpwd"></mt-field>
        <mt-field placeholder="请输入邮箱" v-model="eMail"></mt-field>
        <mt-field placeholder="请输入手机号码" v-model="phoneNumber"></mt-field>
        <mt-button size="large" @click="reg">注册</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            uname:"",
            upwd:"",
            cpwd:"",
            phoneNumber:"",
            eMail:""
        }
    },
    methods:{
        reg(){
            let u = this.uname;
            let p = this.upwd;
            let c = this.cpwd;
            let pn = this.phoneNumber;
            let e = this.eMail;

            let reg1 = /^[a-z0-9]{3,12}$/i;

            let reg2 = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-z]+$/

            let reg3 = /^1[3-9]\d{9}$/

            if(!reg1.test(u)){
                this.$messagebox("消息","用户名格式不正确")
            }else if (!reg1.test(p)){
                this.$messagebox("消息","密码格式不正确")
            }else if (p!=c){
                this.$messagebox("消息","再次输入密码不正确")
            }else if( !reg2.test(e) ){
                this.$messagebox("消息","邮箱格式不正确")
            } else if( !reg3.test(pn) ){
                this.$messagebox("消息","手机号码格式不正确")
            } else {
            this.$toast("注册成功")
            this.$router.push("/")
            }
        }
    }
}
</script>

<style>


</style>