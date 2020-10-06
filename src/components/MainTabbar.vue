<template>
  <tabbar>
    <tabbar-item path="/home" :activeColor="tabbarItemTextColor">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tabbar-item>

    <tabbar-item path="/category" :activeColor="tabbarItemTextColor">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tabbar-item>

    <tabbar-item path="/cart" :activeColor="tabbarItemTextColor">
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tabbar-item>

    <tabbar-item path="/profile" :activeColor="tabbarItemTextColor">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tabbar-item>
  </tabbar>
</template>

<script>
  import Tabbar from './tabbar/Tabbar'
  import TabbarItem from "./tabbar/TabbarItem";
  export default {
    name: "MainTabBar",
    components: {
      Tabbar,
      TabbarItem
    },
    data() {
      return {
        tabbarItemTextColor: 'red'
      }
    }
  }
</script>

<style scoped>

</style>