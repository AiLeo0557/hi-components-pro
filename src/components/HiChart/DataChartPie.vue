<script lang="ts">
import { Root, Tooltip, percent, color } from '@amcharts/amcharts5'
import { PieChart, PieSeries } from '@amcharts/amcharts5/percent'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'
import am5themes_Dark from '@amcharts/amcharts5/themes/Dark'
import { onMounted, useAttrs, watch, defineOptions, defineProps } from '@vue/runtime-core'
</script>
<script lang="ts" setup>
defineOptions({
  name: 'DataChartPie'
})
const props = defineProps({
  data: Array
})
const { keyname, hidden_s_l } = useAttrs()
onMounted(() => {
  let root = Root.new(`pie-chart-wrap-${keyname}`)
  root.setThemes([am5themes_Animated.new(root), am5themes_Dark.new(root)])
  let pieChart = root.container.children.push(
    PieChart.new(root, {
      layout: root.verticalLayout,
      innerRadius: percent(70)
    })
  )
  let pieSeries = pieChart.series.push(
    PieSeries.new(root, {
      valueField: 'value',
      categoryField: 'label',
      alignLabels: false
    })
  )
  if (hidden_s_l) {
    pieSeries.labels.template.set('visible', false)
  }
  pieSeries
    .get('colors')
    ?.set('colors', [
      color('#397DD3'),
      color('#5FBA99'),
      color('#8C8DD1'),
      color('#5BBDCB'),
      color('#379689'),
      color('#87D5E0')
    ])
  pieSeries.labels.template.setAll({
    textType: 'circular',
    centerX: 0,
    centerY: 0
  })
  watch(
    () => props.data,
    (data: any) => {
      pieSeries.data.setAll(data)
    },
    {
      immediate: true,
      deep: true
    }
  )
  pieSeries.appear()
})
</script>
<template>
  <div class="pie-chart-wrap" :id="`pie-chart-wrap-${keyname}`" />
</template>
<style scoped>
.pie-chart-wrap {
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 20;
}
</style>
