import { default as HiInput } from './components/HiInput/HiInput.vue'
import { default as HiSelect } from './components/HiSelect/HiSelect.vue'
import { default as HiDate } from './components/HiDate/HiDate.vue'
import { default as HiFormItem } from './components/HiFormItem/HiFormItem.vue'
import { default as HiForm } from './components/HiForm/HiForm.vue'
import { default as HiTable } from './components/HiTable/HiTable.vue'
import { default as HiTableItem } from './components/HiTable/HiTableItem'
import { default as HiTableGroup } from './components/HiTable/HiTableGroup'
// import { default as MapZhe } from './components/HiMap/MapZhe.vue'
// import { default as MapZhong } from './components/HiMap/MapZhong.vue'
// import { default as SubMapZhe } from './components/HiMap/SubMapZhe.vue'
import { default as TableDataAccess } from './components/HiTable/table-data-access'
import { default as TableDataPreview } from './components/HiTable/table-data-preview'
import { default as DataChartFlow } from './components/HiChart/DataChartFlow.vue'
import { default as DataChartLine } from './components/HiChart/DataChartLine.vue'
import { default as DataChartPie } from './components/HiChart/DataChartPie.vue'
import { default as DataChartPieBox } from './components/HiChart/DataChartPieBox.vue'
import { default as DataChartTop } from './components/HiChart/DataChartTop.vue'
import { default as HiDialog } from './components/HiDialog/HiDialog.vue'
export { HiDialog, HiTable }
export default {
  install(app: any) {
    app.component(HiInput.name, HiInput)
    app.component(HiSelect.name, HiSelect)
    app.component(HiDate.name, HiDate)
    app.component(HiFormItem.name, HiFormItem)
    app.component(HiForm.name, HiForm)
    app.component(HiTable.name, HiTable)
    app.component(HiTableItem.name, HiTableItem)
    app.component(HiTableGroup.name, HiTableGroup)
    // app.component(MapZhe.name, MapZhe)
    // app.component(MapZhong.name, MapZhong)
    // app.component(SubMapZhe.name, SubMapZhe)
    app.component(TableDataAccess.name, TableDataAccess)
    app.component(TableDataPreview.name, TableDataPreview)
    app.component(DataChartFlow.name, DataChartFlow)
    app.component(DataChartLine.name, DataChartLine)
    app.component(DataChartPie.name, DataChartPie)
    app.component(DataChartPieBox.name, DataChartPieBox)
    app.component(DataChartTop.name, DataChartTop)
    app.component(HiDialog.name, HiDialog)
  }
}
