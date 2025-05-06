<script lang="ts">
import DataChartPie from './DataChartPie.vue';
import IconPointer from '../HiIcon/IconPointer.vue';
import {defineOptions, defineProps, PropType} from '@vue/runtime-core'
import { getFormatNum } from 'hi-utils-pro';
</script>
<script lang="ts" setup>
defineOptions({
  name: 'DataChartPieBox'
})
const colors = ['#397DD3', '#5FBA99', '#8C8DD1', '#5BBDCB', '#379689', '#87D5E0']
defineProps({
  items: Array as PropType<{label: string, value: number, format?: number}[]>,
})
const doFormat = (value: number) => getFormatNum(value, 4)
</script>
<template>
  <main class="data-chart-pie-box">
    <div class="data-chart-pie">
      <div class="center">
        <h1 class="pie-title">{{ $attrs.title }}</h1>
        <p class="pie-total-amount">{{ $attrs.total }}</p>
        <p class="pie-unit">{{ $attrs.unit }}</p>
      </div>
      <data-chart-pie :keyname="$attrs.keyname" :hidden_s_l="$attrs.hidden_s_l" :data="items" />
    </div>
    <ul :class="{ 'data-chart-legend': true, 'no-gap': $attrs.no_gap }">
      <li class="data-chart-legend-item" :key="index" v-for="(item, index) in items">
        <span class="_left">
          <icon-pointer :color="colors[index]" />
          {{ item?.label }}
        </span>
        <span class="_right">{{ item?.format ? doFormat(item?.value) : item?.value }}</span>
      </li>
    </ul>
  </main>
</template>
<style lang="scss" scoped>
.data-chart-pie-box {
  display: flex;
  flex: 1;
  align-items: center;
  gap: 16px;
  .data-chart-pie {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 254px;
    height: 254px;
    background: url(./data-chart-pie-bg.png) no-repeat;
    background-size: 100% 100%;
    position: relative;
    .center {
      position: absolute;
      z-index: 10;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #01f0ff;
      text-align: center;
      .pie-title {
        font-size: 14px;
        font-weight: 500;
      }
      .pie-total-amount {
        font-size: 28px;
      }
      .pie-unit {
        font-size: 14px;
      }
    }
    .pie-chart-wrap {
      height: 100%;
      width: 100%;
      position: relative;
      z-index: 20;
    }
  }
  .data-chart-legend {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
    &.no-gap {
      gap: 0px;
    }
    .data-chart-legend-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-basis: 32px;
      flex-shrink: 0;
      flex-grow: 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      ._left {
        text-align: left;
      }
      ._right {
        text-align: right;
      }
    }
  }
}
</style>
