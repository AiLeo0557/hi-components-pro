<script lang="ts">
import {defineOptions, PropType, defineProps} from '@vue/runtime-core';
defineOptions({
  name: 'BaseTableColumnsTransfer'
})
interface RemoteColumnOption {
  id: string
  columnCn: string
  columnEn: string
  columnLength: string
  columnSite: 'center' | 'left' | 'right'
  dataLength: string
  dataType: string
  dynId: string
  enableGrid: '1' | '0'
  enableSearch: '1' | '0'
  lastNum: string
  mark: string
  moduleId: string
  moduleName: string
  sortNum: string
}
</script>
<script lang="ts" setup>
defineProps({
  targetdata: {
    type: Array as PropType<RemoteColumnOption[]>,
    default: []
  },
  sourcedata: {
    type: Array as PropType<RemoteColumnOption[]>,
    default: []
  }
})
</script>
<template>
  <hi-transfer :sourcedata="sourcedata" :targetdata="targetdata" />
</template>

<style lang="scss" scoped></style>
