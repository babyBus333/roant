# Rdescription

此组件使用和 Rtable 相同的原理，使用 fields 渲染详情列表项 fields 可与 Rtable 复用

自定义组件：组件接收({ value 根据 dataIndex 获取的值, record dataSource 数据 }) => any
<code src="./demo/demo1.tsx">基本使用</code>

### DescriptionProps

| 参数 | 说明 | 类型 | 默认值| 版本 |
| --- | --- | --- | --- | --- |
| dataSource | 数据源 | Record<string, any>[]| []||
| fields | 列表配置 | TableFieldProps[]| []||
| activeFields | 动态列表配置,通过 dataIndex 作为唯一值与 fields 深度合并 | FormFieldProps[] | - ||
| loading| 列表加载中 | boolean| false ||
| titleSuffix| 渲染在标题 title 后的值| string | ''||
| emptyHolder| 列表占位符表格值为 null\|''\|undefined | string \| ReactNode| 默认'-' ||
| rowProps | 栅格 row 属性 [Row](https://4x.ant.design/components/grid-cn/) | 参考[Row](https://4x.ant.design/components/grid-cn/) | - | -| |
| colProps | 默认传递给列表 col 属性 [Col](https://4x.ant.design/components/grid-cn/) | 参考[Col](https://4x.ant.design/components/grid-cn/) | - | -| |
| ...rest| 多余属性会合并传递给 Table 组件| any| - ||

### DescriptionProps.fields

表单
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| visible | 是否显示 | boolean | true | |
| title | 标题 | string | - | |
| type | 表单类型，根据 type 作为 key 去表单 Rconfig-provider.description 查询组件| string | - | |
| props | 此参数会传递给表格 type 对应的组件或者 render 组件、支持传递函数返回传递参数 | Record<string, any> \| function | - | |
| dataIndex | 同 antd table.columns.dataIndex | string \| string[] | - | |
| className | 列表项样式名 | string \| string[] | - | |
| render | 强制渲染使用 render type 将失效 | ({ value, record }: { value: any; record: any }) => any | - | |
| colProps | 设置此项 col 配置，会覆盖 DescriptionProps.colProps [Col](https://4x.ant.design/components/grid-cn/) | 参考[Col](https://4x.ant.design/components/grid-cn/) | - | - | |
| ...rest | 多余属性会合并传递给列表项 | any | - | |
