import { computed, defineComponent, reactive, ref, toRefs, type PropType } from '@vue/runtime-core'
import './style.module.scss'
import { ElRow, ElCol, ElMessage } from 'element-plus'
import HiForm from '../HiForm/HiForm.vue'
import HiTable from '../HiTable/HiTable.vue'
import BaseTablePagination from './BaseTablePagination.vue'
import { FormElementOption, HiFormConfig, HiFormItemOption, HiTableColElOptions } from 'hi-definitions'
import { useBusPost, type HiResponseData } from 'hi-http'

interface SearchFormData {
  groupCode: string[]
}
interface AccessFormData {
  items: string[]
}
interface IGData {
  differ: string
  gengroupname_differ: string
  groupCode_differ: string
}
interface FSData {
  differ: string
  gengroupname: string
  groupCode: string
}
interface ResultValue {
  columns: HiTableColElOptions[]
  fsData: FSData[]
  igData: IGData[]
  ig1201Data: IGData[]
  keyPagerData: keyPagerData
}
interface keyPagerData {
  current: number
  pages: number
  records: string[]
  searchCount: number
  size: number
  total: number
}
export default defineComponent({
  name: 'table-data-access',
  components: {
    ElRow,
    ElCol,
    HiForm,
    HiTable,
    BaseTablePagination,
  },
  props: {
    tableName: {
      type: String,
      default: ''
    },
    tableUrl: {
      type: String,
      default: ''
    },
    accessParamTableName: {
      type: String,
      default: ''
    },
    accessUrl: {
      type: String,
      default: ''
    },
    tableCount: {
      type: Number,
      default: 3
    },
    searchFormItems: {
      type: Array as PropType<HiFormItemOption<FormElementOption>[]>,
      default: []
    }
  },
  setup(props, { attrs }) {
    const { tableName, tableUrl, accessParamTableName, accessUrl, tableCount, searchFormItems } =
      toRefs(props)
    const span_count = computed(() => 24 / tableCount.value)
    const tableDataParam = reactive({
      page: 1,
      pageSize: 10
    })
    const searchFormConfig: HiFormConfig<SearchFormData> = {
      inline: true,
      defaultSpan: 8,
      formData: reactive({
        groupCode: []
      }),
      showSearchBtn: true,
      onSubmit(data) {
        Object.assign(tableDataParam, data)
      },
      items: searchFormItems.value,
      labelWidth: 0
    }
    /**
     * 三表数据请求相关逻辑
     */
    const tableCols = ref<HiTableColElOptions[]>([])
    const igData = ref<IGData[]>([])
    const ig1201Data = ref<IGData[] | undefined>([])
    const fsData_config = reactive({
      args: [
        tableUrl.value,
        tableDataParam,
        {
          onFormat(data: HiResponseData<ResultValue>) {
            /**
             * igData: 交易数据
             * ig1201Data: 申报发布数据
             * fsData: 本地数据
             */
            tableCols.value = data.resultValue!.columns.map((col: any) => {
              if (col.columnName === 'differ') {
                return {
                  prop: col.columnName,
                  label: col.columnNameCn,
                  align: 'center',
                  fixed: 'right'
                }
              }
              return {
                prop: col.columnName,
                label: col.columnNameCn
              }
            })
            igData.value = data.resultValue!.igData
            ig1201Data.value = data.resultValue!.ig1201Data
            return {
              data: data.resultValue!.fsData,
              total: data.resultValue!.keyPagerData.total
            }
          }
        }
      ]
    })
    /**
     * 数据接入相关逻辑
     */
    const igSelectedTableData = ref<any>([])
    const ig1201SelectedTableData = ref<any>([])
    const accessFormConfig: HiFormConfig<AccessFormData> = {
      inline: true,
      formData: reactive({
        items: []
      }),
      showSearchBtn: true,
      searchBtnText: '接入',
      onSubmit(data: any) {
        const accessData = [...igSelectedTableData.value, ...ig1201SelectedTableData.value]
        if (!accessData.length) {
          ElMessage.warning('请选择需要接入的数据！')
          return
        }
        useBusPost(
          accessUrl.value,
          {
            ...data,
            [accessParamTableName.value]: accessData
          },
          {
            onPrompt(data) {
              igSelectedTableData.value = []
              ElMessage.success(`接入成功！接入条数为${data.resultValue}`)
            },
            onSuccess(data) {
              // console.log('fsTaTableScrollBarRef:', fsTaTableScrollBarRef.value)
              fsTaTableScrollBarRef.value.baseTableRef.onReload()
            }
          }
        )
      },
      items: [
        {
          tag: 'select',
          span: 10,
          label: '接入字段',
          name: 'item',
          elConfig: {
            multiple: true,
            options_config: {
              alias: ['text', 'value'],
              args: [
                'engine-bill/dropDown/queryTableFieldList',
                { tableName },
                {
                  params_type: 'formData',
                  onFormat(data: any) {
                    return data
                  }
                }
              ]
            }
          },
          formrequired: true
        }
      ],
      labelWidth: 0,
      defaultSpan: 24
    }
    /**
     * table 滚动联动
     */
    const handleFsScroll = ({ top, left }: Record<'top' | 'left', number>) => {
      igTaTableScrollBarRef.value.baseTableRef.tableMainRef.setScrollTop(top)
      igTaTableScrollBarRef.value.baseTableRef.tableMainRef.setScrollLeft(left)
      ig1201TaTableScrollBarRef.value?.baseTableRef.tableMainRef.setScrollTop(top)
      ig1201TaTableScrollBarRef.value?.baseTableRef.tableMainRef.setScrollLeft(left)
    }
    const handleIgScroll = ({ top, left }: Record<'top' | 'left', number>) => {
      fsTaTableScrollBarRef.value.baseTableRef.tableMainRef.setScrollTop(top)
      fsTaTableScrollBarRef.value.baseTableRef.tableMainRef.setScrollLeft(left)
      ig1201TaTableScrollBarRef.value?.baseTableRef.tableMainRef.setScrollTop(top)
      ig1201TaTableScrollBarRef.value?.baseTableRef.tableMainRef.setScrollLeft(left)
    }
    const handleIg1201Scroll = ({ top, left }: Record<'top' | 'left', number>) => {
      fsTaTableScrollBarRef.value.baseTableRef.tableMainRef.setScrollTop(top)
      fsTaTableScrollBarRef.value.baseTableRef.tableMainRef.setScrollLeft(left)
      igTaTableScrollBarRef.value.baseTableRef.tableMainRef.setScrollTop(top)
      igTaTableScrollBarRef.value.baseTableRef.tableMainRef.setScrollLeft(left)
    }
    const fsTaTableScrollBarRef = ref<any>(null)
    const igTaTableScrollBarRef = ref<any>(null)
    const ig1201TaTableScrollBarRef = ref<any>(null)
    /**
     * 当表数据状态样式展示
     */
    const StyleFun = ({ column, row, columnIndex, rowIndex }: any) => {
      if (row.differ === '不一致') {
        if (column.label === '状态') {
          return { background: '#FDF5E6', color: 'red' }
        }
        if (row[column.property + '_differ']) {
          return { background: '#FDF5E6', color: 'red' }
        }
        return { background: '#FDF5E6', color: '#333' }
      } else if (row.differ === '一致') {
        if (column.label === '状态') {
          return { background: '#dff5ee', color: 'green' }
        }
        return { background: '#dff5ee', color: 'green' }
      }
    }
    return () => (
      <div>
        <el-row gutter={10} style="margin-bottom: 32px">
          <el-col span={24 - span_count.value}>
            <hi-form {...searchFormConfig}></hi-form>
          </el-col>
          <el-col span={span_count.value}>
            <hi-form {...accessFormConfig}></hi-form>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 16px" gutter={10}>
          <el-col span={span_count.value}>
            <hi-table
              title="交易数据"
              columns_config={{
                default: tableCols.value
              }}
              tableHeight={350}
              style="width: 100%"
              cell-style={StyleFun}
              data_config={{
                default() {
                  return igData
                }
              }}
              v-model:selections={igSelectedTableData.value}
              ref={igTaTableScrollBarRef}
              onScroll={handleIgScroll}
              pagination_config={{ page_size: 100, pagination_hidden: true, hidden: true }}
            />
          </el-col>
          {span_count.value === 8 ? (
            <el-col span={span_count.value}>
              <hi-table
                title="申报发布数据"
                columns_config={{
                  default: tableCols.value
                }}
                tableHeight={350}
                style="width: 100%"
                cell-style={StyleFun}
                data_config={{
                  default() {
                    return ig1201Data
                  }
                }}
                v-model:selections={ig1201SelectedTableData.value}
                ref={ig1201TaTableScrollBarRef}
                onScroll={handleIg1201Scroll}
                pagination_config={{ page_size: 100, pagination_hidden: true, hidden: true }}
              />
            </el-col>
          ) : null}
          <el-col span={span_count.value}>
            <hi-table
              title="本地数据"
              tableHeight={350}
              style="width: 100%"
              columns_config={{
                default: tableCols.value.slice(0, -1)
              }}
              data_config={fsData_config}
              hide_selection_col={true}
              ref={fsTaTableScrollBarRef}
              pagination_config={{ page_size: 100, hidden: true }}
              onScroll={handleFsScroll}
            />
          </el-col>
        </el-row>
        <el-row>
          <el-col span={24}>
            <base-table-pagination />
          </el-col>
        </el-row>
      </div>
    )
  }
})
