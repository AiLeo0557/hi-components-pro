<script lang="ts">
import { useAttrs, defineExpose, defineOptions } from '@vue/runtime-core';
import { defineHiFormItems } from 'hi-definitions';
import HiForm from '../HiForm/HiForm.vue'
</script>
<script lang="ts" setup>
defineOptions({
  name: 'BaseUploadForm',
})
const { configs }: any = useAttrs()
const [formData, formItems] = defineHiFormItems(configs.items)
defineExpose({ formData })
</script>

<template>
  <hi-form
    :inline="false"
    :items="formItems"
    :label-width="80"
    :defaultSpan="24"
    v-model:formData="formData"
    ref="$form"
  />
</template>
