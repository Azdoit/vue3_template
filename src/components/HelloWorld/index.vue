<template>
  <div class="wrapper">
    <span>hello world</span>
    <svg-icon icon='member-management'></svg-icon>
    <el-button type="primary"> 按钮</el-button>
    <screen-full class="screen-full"></screen-full>
  </div>
</template>

<script setup>
import SvgIcon from '@/components/SvgIcon'
import ScreenFull from '@/components/ScreenFull'
</script>

<style lang="scss" scoped>
.wrapper {
  height: 60px;
  margin: 10px;
  display: flex;
  align-items: center;

  .svg-icon {
    width: 20px;
    height: 20px;
  }

  .screen-full {
    flex: 1;
    text-align: right;
    margin-right: 30px;
  }
}
</style>