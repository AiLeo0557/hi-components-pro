<script setup lang="ts">
import { defineOptions } from "@vue/runtime-core";
defineOptions({
  name: "DataChartFlow",
});
</script>
<template>
  <div class="flow-wrapper">
    <div class="flow-main h20">
      <div class="flow-line-item"></div>
      <div class="flow-line-space"></div>
      <div class="flow-line-item">
        <div class="horizontal-line"></div>
        <div class="vertical-line"></div>
        <div class="horizontal-line fill"></div>
      </div>
      <div class="flow-line-space">
        <div class="horizontal-line fill"></div>
      </div>
      <div class="flow-line-item">
        <div class="horizontal-line fill"></div>
        <!-- <div class="vertical-line"></div>
        <div class="horizontal-line fill"></div> -->
      </div>
      <div class="flow-line-space">
        <div class="horizontal-line fill"></div>
      </div>
      <div class="flow-line-item">
        <div class="horizontal-line fill"></div>
        <div class="vertical-line"></div>
        <div class="horizontal-line"></div>
      </div>
      <div class="flow-line-space"></div>
      <div class="flow-line-item"></div>
    </div>
    <div class="flow-main h20">
      <div class="flow-line-item"></div>
      <div class="flow-line-space"></div>
      <div class="flow-line-item">
        <div class="horizontal-line"></div>
        <div class="vertical-line"></div>
        <div class="horizontal-line fill"></div>
        <el-icon class="vertical-end">
          <CaretBottom />
        </el-icon>
      </div>
      <div class="flow-line-space">
        <div class="horizontal-line fill"></div>
      </div>
      <div class="flow-line-item">
        <div class="horizontal-line fill"></div>
        <div class="vertical-line"></div>
        <div class="horizontal-line"></div>
      </div>
      <div class="flow-line-space"></div>
      <div class="flow-line-item">
        <div class="vertical-line"></div>
      </div>
      <div class="flow-line-space"></div>
      <div class="flow-line-item"></div>
    </div>
    <div class="flow-main h10"></div>
    <div class="flow-main">
      <div class="flow-item">生成价格公示表</div>
      <div class="flow-line-wrapper">
        <div class="flow-line"></div>
        <el-icon class="end">
          <CaretRight />
        </el-icon>
      </div>
      <div class="flow-item">电价处业务人员审核</div>
      <div class="flow-line-wrapper">
        <div class="flow-line"></div>
        <el-icon class="end">
          <CaretRight />
        </el-icon>
      </div>
      <div class="flow-item">审计审核</div>
      <div class="flow-line-wrapper">
        <div class="flow-line"></div>
        <el-icon class="end">
          <CaretRight />
        </el-icon>
      </div>
      <div class="flow-item">电价处长审核</div>
      <div class="flow-line-wrapper">
        <div class="flow-line"></div>
        <el-icon class="end">
          <CaretRight />
        </el-icon>
      </div>
      <div class="flow-item">审定</div>
    </div>
  </div>
</template>
<style scoped>
.flow-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.flow-main {
  width: 100%;
  padding: 0 10%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.flow-item {
  height: 80px;
  width: 180px;
  text-align: center;
  line-height: 80px;
  border-radius: 6px;
  border: 1px solid rgba(40, 108, 171, 0.631372549);
  background: linear-gradient(
    180deg,
    rgba(0, 25, 42, 0.8509803922) -5.31%,
    rgba(0, 25, 42, 0.1294117647) -5.3%,
    rgba(5, 57, 94, 0.8509803922) 94.22%
  );
}
.flow-line-item {
  width: 180px;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
}
.flow-line {
  height: 3px;
  width: calc(100% - 16px);
  /* flex: 1; */
  background-color: #1f9acf;
  /* position: relative; */
}
.end {
  color: #1f9acf;
  /* position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%) translateX(50%); */
  font-size: 24px;
  /* width: 16px; */
  overflow: hidden;
  transform: translateX(-50%);
}
.vertical-end {
  color: red;
  font-size: 24px;
  position: absolute;
  left: 50%;
  bottom: -10px;
  transform: translateX(-50%);
}
.flow-line-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  /* padding: 0 4px; */
  padding-left: 20px;
}
.h20 {
  height: 20px;
}
.h10 {
  height: 10px;
}
.vertical-line {
  height: 20px;
  width: 3px;
  background: red;
}
.horizontal-line {
  flex: 1;
  height: 3px;
}
.horizontal-line.fill {
  background: red;
}
.flow-line-space {
  height: 100%;
  flex: 1;
}
</style>
