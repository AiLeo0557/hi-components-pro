<script lang="ts" setup></script>
<template>
  <header class="data-box-header">
    <h1 class="_title">
      <el-icon size="16">
        <icon-header-bd />
      </el-icon>
      <span class="_text">{{ $attrs.title }}</span>
    </h1>
    <slot></slot>
    <span v-if="$attrs.unit" class="_unit"> 单位：{{ $attrs.unit }} </span>
  </header>
</template>
<style lang="scss" scoped>
.data-box-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  ._title {
    display: flex;
    align-items: center;
    margin-left: -5px;
    ._text {
      font-size: 16px;
      font-weight: 500;
    }
  }
  ._unit {
    color: #fffffff2;
    font-size: 14px;
  }
}
</style>
