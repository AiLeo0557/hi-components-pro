<script setup lang="ts">
import { defineProps, defineOptions } from "@vue/runtime-core";
import { ElButton } from "element-plus";
import { buttonProps } from "element-plus/es/components/button/src/button";

// ✅ 合并原生属性 + 自定义属性
type Props = InstanceType<typeof ElButton>['$props'] & {
  rounded?: boolean
};
// 继承 Element-Button 的所有 Props
const props = defineProps({
  ...buttonProps,
  // 扩展自定义 Props
  rounded: {
    type: Boolean,
    default: false,
  },
});

// 透传所有 Element-Button 的功能
defineOptions({
  name: "HButton",
  inheritAttrs: false,
});
</script>

<template>
  <ElButton v-bind="props" :class="{ 'is-rounded': props.rounded }">
    <slot />
  </ElButton>
</template>

<style scoped>
.el-button.is-rounded {
  border-radius: 20px;
}
</style>