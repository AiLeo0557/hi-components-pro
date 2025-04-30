import { watchEffect, toRefs, onMounted, reactive, defineComponent, type PropType, ref, } from '@vue/runtime-core'
import { HiTableColElOptions } from 'hi-definitions'
import { HiRequestArgument } from 'hi-http'
import { getFieldValueByPath } from 'hi-utils-pro'
import HiTable from '../HiTable/HiTable.vue'

export default defineComponent({
  name: 'table-data-preview',
  components: { HiTable },
  props: {
    args: Array as unknown as PropType<HiRequestArgument<any>>,
    treeNode: Object,
    overviewData: Object
  },
  setup(props) {
    const tableCols = ref<HiTableColElOptions[] | null>(null)
    const { args } = toRefs(props)
    const [url, params, options] = args.value
    const tableDataParam = reactive({})
    watchEffect(() => {
      Object.keys(params).forEach((param_key_name: string) => {
        const param_value_name = Reflect.get(options, `param_${param_key_name}_key`)
        const param_key_value = getFieldValueByPath(param_value_name, props)
        Reflect.set(tableDataParam, param_key_name, param_key_value)
      })
    })
    onMounted(() => { })
    const data_config = reactive({
      args: [
        url,
        tableDataParam,
        {
          ...options,
          onFormat(res: any) {
            tableCols.value = res.resultValue.heads.map(
              ({ width, ...item }: HiTableColElOptions): HiTableColElOptions => ({
                ...item,
                minWidth: width,
                align: 'center'
              })
            )
            return {
              data: res.resultValue.contents,
              total: res.resultValue.contents.length
            }
          }
        }
      ]
    })
    return () => (
      <hi-table
        tableHeight={350}
        data_config={data_config}
        hide_selection_col={true}
        columns_config={{
          default: tableCols.value
        }}
        pagination_config={{ pagination_hidden: true }}
      />
    )
  }
})
