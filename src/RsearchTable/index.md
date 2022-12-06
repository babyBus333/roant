# RsearchTable

<code src="./demo/demo1.tsx">基本使用</code>

### 回车提交表单并搜索
0.1.3版本增加回车通过isEnterQuery配置，也可通过config-provider searchTable>isEnterQuery进行全局配置

### Table排序
0.1.1版本table增加tableContainer、tableContainerProps属性，SearchTable可设置table属性透传下去；
tableContainer会包裹Table组件，通过此方式可使用DndContext包裹Table达到表格排序功能；参数参考[Rtable 拖拽排序 文档](https://ant-design.antgroup.com/components/table-cn#components-table-demo-drag-sorting)


### SearchTableProps

| 参数| 说明| 类型| 默认值| 版本 |
| --- | --- | --- | --- | --- |
| fetchData| 必须 获取数据方法，表单的值会校验完成后传递给此组件作为参数 | (searchParam: Record<string, any>) => void| -||
| dataSource | 数据源传递给 Rtable.dataSource| Record<string, any>[] | []||
| tableProps | Rtable 参数参考[Rtable 文档](/components/rtable)| - | []||
| formProps| Rform 参数参考[Rform 文档](/components/rform) | - | -||
| total | 列表总数| number| -||
| ref | 获取组件方式实例 请求数据，重置表单和数据 | React.Ref<{onQuery: (param: Record<string, any>) => void;onReset: () => void;}> | -||
| autoQuery| 是否在应用初始化执行 fetchData| boolean | false ||
| toolbar| 操作栏| React.ReactNode| -||
| form| form 实例，不传组件内部会默认生成 [form](https://4x.ant.design/components/form-cn/) | FormInstance | -| -| |
| pageSizeKey| 传递给 fetchData 方法参数的 分页大小 key| string| 'size'||
| pageCurrentKey | 传递给 fetchData 方法参数的 当前分页 key| string| 'current' ||
| isEnterQuery| 是否回车执行搜索| boolean| false ||
