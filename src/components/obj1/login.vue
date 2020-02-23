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
            let uname = this.uname;
            let upwd = this.upwd;

            let url = "login"
            let reg = /[a-z0-9]{3,12}/i;
            let obj = {uname,upwd}

            if(!reg.test(uname)){
                this.$messagebox("消息","用户名格式不正确");
                return;
            } else if (!reg.test(upwd)){
                this.$messagebox("消息","密码格式不正确");
                return;
            } else {
                this.axios.get(url,{params:obj})
                .then(res=>{
                    if (res.data.code == 1) {
                        this.$toast("登录成功");
                        this.$router.push("/")
                    }else if (res.data.code == -1) {
                        this.$messagebox("消息","用户名或密码错误")
                    }
                })
            }

            

            
        }
    }
}
</script>

<style>

</style>