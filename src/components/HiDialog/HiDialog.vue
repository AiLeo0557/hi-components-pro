<script lang="ts">
import {ElButton, ElDialog, ElScrollbar} from 'element-plus'
import { computed } from '@vue/runtime-core';
import 'element-plus/theme-chalk/src/dialog.scss'
import 'element-plus/theme-chalk/src/button.scss'
import 'element-plus/theme-chalk/src/scrollbar.scss'
</script>
<script lang="ts" setup>
/**
 * 弹窗组件
 */
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  hide_footer: {
    type: Boolean,
    default: false
  },
  comfirm_btn_text: {
    type: String,
    default: '确定'
  },
  height: {
    type: Number,
    default: 600
  }
})
const emit = defineEmits(['update:visible', 'confirm'])
const visible_value = computed({
  set(value: boolean) {
    emit('update:visible', value)
  },
  get() {
    return props.visible
  }
})
const handleClose = () => {
  visible_value.value = false
}
const handleConfirm = () => {
  emit('confirm')
}
</script>
<template>
  <el-dialog v-model="visible_value" v-bind="$attrs" draggable>
    <el-scrollbar :max-height="`${height}px`">
      <div style="width: 100%; height: auto; overflow-x: hidden">
        <slot></slot>
      </div>
    </el-scrollbar>

    <template v-if="!hide_footer" #footer>
      <el-button type="primary" @click="handleConfirm">{{ comfirm_btn_text }}</el-button>
      <slot name="footer"></slot>
      <el-button type="primary" @click="handleClose">取消</el-button>
    </template>
  </el-dialog>
</template>

<style lang="scss">
@use '~/styles/mixins' as *;
.hi-dialog {
  --hi-dialog-title-font-size: 16px;
  // --hi-dialog-bg-color: #112646;
  --hi-dialog-box-shadow: 0 16px 48px 16px #14000000, 0 12px 32px 0 #1f000000,
    0 8px 16px -8px #29000000;
  border-radius: 4px;
  padding: 0;
}
.hi-dialog__header {
  display: flex;
  padding: 16px;
  align-items: center;
  border-radius: 4px 4px 0 0;
  background: #24426e;
  height: 56px;
  margin: 0;
}
.hi-dialog__header::before {
  content: ' ';
  display: block;
  width: 3px;
  height: 20px;
  background: linear-gradient(142deg, #55cdf3 4.5%, #1380ce 91.34%);
}
.hi-dialog__title {
  padding-left: 8px;
  font-weight: 600;
}
.hi-dialog__footer {
  @include use-flex-row();
  background: #507ecd33;
  box-shadow: 0 -1px 7px 0 #0000001a;
  padding: 12px 20px;
}
.hi-dialog__body {
  padding: 16px;
}
</style>
