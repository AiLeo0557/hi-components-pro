<template>
  <div :style="`background: ${$attrs.color}`" class="data-chart-legend-pointer"></div>
</template>
<style lang="scss" scoped>
.data-chart-legend-pointer {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 6px;
}
</style>
