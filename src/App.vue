<template>
  <div id="app">
    <myheader></myheader>
    <router-view>
    </router-view>
    <myfoot></myfoot>
  </div>
</template>

<style>
  #app{
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
  }
</style>
