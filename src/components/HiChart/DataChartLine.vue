<script lang="ts" setup>
import { Root, Tooltip } from '@amcharts/amcharts5'
import {
  XYChart,
  XYCursor,
  CategoryAxis,
  AxisRendererX,
  ValueAxis,
  AxisRendererY,
  LineSeries
} from '@amcharts/amcharts5/xy'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'
import am5themes_Dark from '@amcharts/amcharts5/themes/Dark'
import { onMounted, defineOptions } from '@vue/runtime-core'
defineOptions({
  name: 'DataChartLine'
})
onMounted(() => {
  let root = Root.new('line-chart-wrap')
  root.setThemes([am5themes_Animated.new(root), am5themes_Dark.new(root)])
  let chart = root.container.children.push(
    XYChart.new(root, {
      panX: true,
      panY: false,
      wheelX: 'panX',
      wheelY: 'zoomX',
      pinchZoomX: true,
      paddingLeft: 0
    })
  )
  let cursor = chart.set(
    'cursor',
    XYCursor.new(root, {
      behavior: 'none'
    })
  )
  cursor.lineY.set('visible', false)
  let data = [
    {
      value: 9,
      month: '1月'
    },
    {
      value: 7,
      month: '2月'
    },
    {
      value: 3,
      month: '3月'
    },
    {
      value: 4,
      month: '4月'
    },
    {
      value: 4,
      month: '5月'
    },
    {
      value: 8,
      month: '6月'
    },
    {
      value: 2,
      month: '7月'
    },
    {
      value: 5,
      month: '8月'
    },
    {
      value: 9,
      month: '9月'
    },
    {
      value: 10,
      month: '10月'
    },
    {
      value: 4,
      month: '11月'
    },
    {
      value: 12,
      month: '12月'
    }
  ]
  let xAxis = chart.xAxes.push(
    CategoryAxis.new(root, {
      categoryField: 'month',
      startLocation: 0.5,
      endLocation: 0.5,
      renderer: AxisRendererX.new(root, {
        minorGridEnabled: true,
        minGridDistance: 70
      }),
      tooltip: Tooltip.new(root, {})
    })
  )
  xAxis.data.setAll(data)
  let yAxis = chart.yAxes.push(
    ValueAxis.new(root, {
      renderer: AxisRendererY.new(root, {
        pan: 'zoom'
      })
    })
  )
  const createSeries = (name: string, field: string) => {
    let searies = chart.series.push(
      LineSeries.new(root, {
        name,
        xAxis,
        yAxis,
        stacked: true,
        valueYField: field,
        categoryXField: 'month',
        tooltip: Tooltip.new(root, {
          pointerOrientation: 'horizontal',
          labelText: '[bold]{name}[/]\n{categoryX}:{valueY}'
        })
      })
    )
    searies.fills.template.setAll({
      fillOpacity: 0.5,
      visible: true
    })
    searies.data.setAll(data)
    searies.appear()
  }
  createSeries('清算费用合计', 'value')
})
</script>
<template>
  <div class="line-chart-wrap" id="line-chart-wrap"></div>
</template>
<style lang="scss" scoped>
.line-chart-wrap {
  flex: 1;
}
</style>
