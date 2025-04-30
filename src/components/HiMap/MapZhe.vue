<script lang="tsx" setup>
import { computed, defineOptions, defineAsyncComponent, defineProps, reactive, ref } from '@vue/runtime-core'
import { cities } from './configs'

defineOptions({
  name: 'MapZhe'
})
const MapZheCity = defineAsyncComponent(() => import('./components/ZheMapCity.vue'))
const ZheMapBg = defineAsyncComponent(() => import('./components/ZheMapBg.vue'))
const props = defineProps({
  data: {
    type: Array,
    default: []
  },
  group: {
    type: Array,
    default: []
  },
  swidth: {
    type: Number,
    default: 660
  },
  sorte_key: {
    type: String,
    default: 'id'
  },
  use_click: {
    type: Boolean,
    default: true
  }
})
const cityname = ref<string>('')
const sorted_cities = cities.sort(
  (current: any, next: any) => current[props.sorte_key] - next[props.sorte_key]
)
const state = reactive({dateType: 'day'})
const visible = ref<boolean>(false)
const haddleShow = (data: any, title: string) => {
  tableData.value = data
  visible.value = true
  cityname.value = title
}
const tableCol = ref<any>()
const tableData = ref<any>([])
const tableDataConfig = reactive({
  default() {
    return tableData
  }
})
const columns_config = computed(() => {
  if (state.dateType === 'month') {
    return {
      default: [
        {
          prop: 'caption',
          label: '电厂名称',
          minWidth: 200
        },
        {
          prop: 'address',
          label: '地址',
          minWidth: 220
        },
        {
          prop: 'quantity',
          label: '量',
          align: 'right',
          minWidth: 140,
          numFormat: 2
        },
        {
          prop: 'price',
          label: '价',
          align: 'right',
          minWidth: 140,
          numFormat: 4
        }
      ]
    }
  } else {
    return {
      default: [
        {
          prop: 'gengroupname',
          label: '集团',
          minWidth: 200
        },
        {
          prop: 'caption',
          label: '电厂名称',
          minWidth: 200
        },
        {
          prop: 'address',
          label: '地址',
          minWidth: 220
        },
        {
          prop: 'rqdl',
          label: '日前电量',
          align: 'right',
          minWidth: 140,
          numFormat: 2
        },
        {
          prop: 'rqjg',
          label: '日前价格',
          align: 'right',
          minWidth: 140,
          numFormat: 4
        },
        {
          prop: 'ssdl',
          label: '实时电量',
          align: 'right',
          minWidth: 140,
          numFormat: 2
        },
        {
          prop: 'ssjg',
          label: '实时价格',
          align: 'right',
          minWidth: 140,
          numFormat: 4
        }
      ]
    }
  }
})
</script>
<template>
  <svg :width="swidth" viewBox="0 0 784 886" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ZheMapBg />
    <map-zhe-city
      v-for="(item, index) in sorted_cities"
      :key="index"
      v-bind="item"
      :data="data[index]"
      :group="group"
      :price="data[index] ? data[index].price : '-'"
      :value="data[index] ? data[index].value : '-'"
      :ratioFormat="data[index] ? data[index].ratioFormat : '-'"
      :use_click="use_click"
      @loadData="haddleShow"
    />
  </svg>
  <hi-dialog
    :width="1200"
    :title="`${cityname}${$attrs.gencategoryName}电厂列表`"
    :hide_footer="true"
    v-model:visible="visible"
  >
    <hi-table
      :hide_selection_col="true"
      :pagination_config="{ hidden: true }"
      :columns_config="columns_config"
      :tableHeight="350"
      :data_config="tableDataConfig"
    />
  </hi-dialog>
</template>
