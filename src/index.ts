import { default as HiInput } from './components/HiInput/HiInput.vue'
import { default as HiSelect } from './components/HiSelect/HiSelect.vue'
import { default as HiDate } from './components/HiDate/HiDate.vue'
import { default as HiFormItem } from './components/HiFormItem/HiFormItem.vue'
import { default as HiForm } from './components/HiForm/HiForm.vue'
import { default as HiTable } from './components/HiTable/HiTable.vue'
import { default as HiTableItem } from './components/HiTable/HiTableItem'
import { default as HiTableGroup } from './components/HiTable/HiTableGroup'
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
  }
}
