<script>
import {defineOptions} from "@vue/runtime-core";
import { ElInput } from "element-plus";
import 'element-plus/theme-chalk/src/input.scss';
</script>
<script setup lang="ts">
defineOptions({
  name: "HiInput",
});
// import { buttonProps } from "element-plus/es/components/button/src/button";

// 继承 Element-Button 的所有 Props
// const props = defineProps({
//   ...buttonProps,
//   // 扩展自定义 Props
//   rounded: {
//     type: Boolean,
//     default: false,
//   },
// });

// const props = defineProps({
//   ...inputProps,
// });
</script>

<template>
  <ElInput v-bind="$attrs" />
</template>

<style scoped>
</style>