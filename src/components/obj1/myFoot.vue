<template>
    <div>
        <mt-tabbar v-model="active">
            <mt-tab-item id="tab1">
                <router-link to="/">首页</router-link>
            </mt-tab-item>
            <mt-tab-item id="tab2">
                <router-link to="/login">登录</router-link>
            </mt-tab-item>
            <mt-tab-item id="tab3">
                <router-link to="/reg">注册</router-link>
            </mt-tab-item>
            <mt-tab-item id="tab4">
                <router-link to="/">我的</router-link>
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>


<script>
export default {
    data(){
        return {
            active:""
        }
    }
}
</script>

<style scoped>
    .mint-tab-item-label a{
        font-size:20px;
        color:#000;
        text-decoration: none;
    }
</style>