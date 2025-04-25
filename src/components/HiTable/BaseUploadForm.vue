<script lang="ts" setup>
import { useAttrs, defineExpose } from '@vue/runtime-core';
import { defineHiFormItems } from 'hi-definitions';

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
