# Rtable

此组件核心为根据 fields 渲染 antd columns，field 多余属性都会传递给 columns RtableProps 其他属性会传递给 antd Table 组件

默认继承了 type 类型 dropdownAction 使用 props 动态返回参数
<code src="./demo/demo1.tsx">基本使用</code>

值变化表格不响应渲染？如果没有 type，为了优化性能 shouldCellUpdate=对比前后 dataIndex 获取的值是否相同，如果前后值变化又需要强制渲染 field 里可设置 shouldCellUpdate=()=>true 更多参考 [shouldCellUpdate](https://4x.ant.design/components/table-cn/)

### 字段合并
activeFields与fields的对象使用lodash进行深度拷贝合并，所有在fields字段里需要动态修改的字段需要在activeFields申明才会被动态覆盖

### TableProps

| 参数 | 说明 | 类型| 默认值| 版本 |
| --- | --- | --- | --- | --- |
| dataSource | 数据源，同 antd dataSource | Record<string, any>[] | []||
| fields | 表格列配置 | TableFieldProps[] | []||
| activeFields | 动态表格列配置,通过 dataIndex 作为唯一值与 fields 深度合并 | FormFieldProps[]| - ||
| total| 列表总数 | number| - ||
| emptyHolder| 表格控制占位符表格值为 null\|''\|undefined | string \| ReactNode | 默认'-' ||
| ...rest| 多余属性会合并传递给 Table 组件| any | - ||

### TableProps.fields

表单
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| visible | 是否显示 | boolean | true | |
| type | 表单类型，根据 type 作为 key 去表单 Rconfig-provider.table 查询组件| string | - | |
| props | 此参数会传递给表格 type 对应的组件或者 render 组件、支持传递函数返回传递参数 | Record<string, any> \| function | - | |
| dataIndex | 同 antd table.columns.dataIndex | string \| string[] | - | |
| render | 强制渲染使用 render type 将失效 | function | - | |
| ...rest | 多余属性会合并传递给 table.columns | any | - | |
