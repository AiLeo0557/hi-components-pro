<script lang="ts" setup>
import { getFormatNum } from 'hi-utils-pro';
import { defineProps, type PropType, defineOptions } from '@vue/runtime-core'
defineOptions({
  name: 'DataChartTop'
})
const num_format = (num: number) => getFormatNum(num, 5)
defineProps({
  dataChartTopList: {
    type: Array as PropType<any>,
    default: []
  }
})
</script>
<script lang="ts">
import {ElSwitch, ElScrollbar} from 'element-plus'
import 'element-plus/theme-chalk/src/switch.scss'
import 'element-plus/theme-chalk/src/scrollbar.scss'
</script>
<template>
  <div class="top_data_template">
    <div class="rank-head">
      <h4 class="rank-item-title">
        {{ $attrs.title }}
      </h4>
      <el-switch
        v-bind="$attrs"
        inline-prompt
        active-value="desc"
        inactive-value="asc"
        active-text="前五名"
        inactive-text="后五名"
        style="--hi-switch-off-color: #646465"
      >
      </el-switch>
    </div>
    <el-scrollbar height="100%">
      <ul class="rank_list">
        <li class="rank_list_item" :key="index" v-for="(item, index) in dataChartTopList">
          <span
            ><b>NO.{{ index + 1 }}</b> {{ item.compName }}</span
          >
          <span class="rank_num">{{ num_format(item.zhpcl) }}</span>
        </li>
      </ul>
    </el-scrollbar>
  </div>
</template>
<style scoped>
.top_data_template {
  height: 100%;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
}
.rank-head {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
}
.rank_list_item {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px dashed #fff;
}
.rank_num {
  color: var(--hi-color-primary);
  font-weight: bold;
}
</style>
