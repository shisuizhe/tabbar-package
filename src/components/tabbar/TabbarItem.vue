<template>
  <div class="tabbar-item">
    <div v-if="!isActive" @click="itemClick">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabbarItem',
    props: {
      // path是通过父组件传递下来的值，所以会根据我点击的父组件显示不同的值
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    methods: {
      itemClick(){
        this.$router.replace(this.path)
      }
    },
    computed: {
      // 通过路由路径是否相等，来判断点击的是哪一个
      isActive() {
        // a.indexOf(b) 如果不等于 -1，说明 a 存在子字符串 b
        return this.$route.path.indexOf(this.path) !== -1;
      },
      activeStyle() {
        // 判断路由是否处于活跃状态，如果是，设置文本样式
        return this.isActive ? {color: this.activeColor} : {}
      }
    }
  }
</script>

<style>
  .tabbar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tabbar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
