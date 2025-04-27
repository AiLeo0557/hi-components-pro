import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $attrs: Record<string, unknown>
    useAttrs: () => Record<string, unknown>
  }
}