<script lang="ts">
import { ElIcon, ElTableColumn } from 'element-plus';
import 'element-plus/theme-chalk/src/table-column.scss';
import 'element-plus/theme-chalk/src/icon.scss';
</script>
<script lang="ts" setup>
import { getFormatNum } from 'hi-utils-pro';
import {isString} from 'hi-datatype-operation';

import {useAttrs} from 'vue'
const attrs = useAttrs()
const { label, subColumns, numFormat: num }: any = attrs
</script>
<template>
  <el-table-column header-align="center" :min-width="label && label.length * 64" v-bind="$attrs">
    <template #header="scope">
      <span v-if="scope.column.label.includes('|')">
        {{ scope.column.label.split('|')[0] }}
        <br />
        {{ scope.column.label.split('|')[1] }}
      </span>
      <template v-else>
        {{ scope.column.label }}
      </template>
      <el-tooltip
        v-if="isString($attrs.tip)"
        class="box-item"
        effect="dark"
        :content="$attrs.tip"
        placement="top"
      >
        <el-icon color="var(--hi-color-primary-light-3)" :size="18">
          <InfoFilled />
        </el-icon>
      </el-tooltip>
    </template>
    <template
      v-if="$attrs?.default || $attrs.numFormat !== undefined || $attrs.subColumns"
      #default="scope"
    >
      <component v-if="$attrs?.default" v-bind="scope" :is="$attrs.default"></component>
      <span v-if="$attrs.numFormat !== undefined">
        {{ getFormatNum(scope.row[scope.column.property], num) }}
      </span>
      <template v-if="subColumns">
        <base-table-column :key="item.prop" v-bind="item" v-for="item in subColumns" />
      </template>
    </template>
  </el-table-column>
</template>
