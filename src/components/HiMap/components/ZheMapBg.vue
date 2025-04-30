<script setup lang="ts">
import { defineAsyncComponent } from '@vue/runtime-core'

const Path1 = defineAsyncComponent(() => import('./Path1.vue'))
const Path2 = defineAsyncComponent(() => import('./Path2.vue'))
const Path3 = defineAsyncComponent(() => import('./Path3.vue'))
const Path4 = defineAsyncComponent(() => import('./Path4.vue'))
const Path5 = defineAsyncComponent(() => import('./Path5.vue'))
const Path6 = defineAsyncComponent(() => import('./Path6.vue'))
const Path7 = defineAsyncComponent(() => import('./Path7.vue'))
const Path8 = defineAsyncComponent(() => import('./Path8.vue'))
const Path9 = defineAsyncComponent(() => import('./Path9.vue'))
</script>
<template>
  <g>
    <!-- <path-1 /> -->
    <!-- <path-2 /> -->
    <!-- <path-3 /> -->
    <!-- <path-4 /> -->
    <!-- <path-5 /> -->
    <!-- <path-6 /> -->
    <!-- <path-7 /> -->
    <!-- <path-8 /> -->
    <!-- <path-9 /> -->
  </g>
</template>
