# RForm

此组件核心功能：通过 fields 字段渲染出 form.item > 表单组件，fields 上多余参数都会传递给 form.item；field.props 参数传递给表单组件
自定义表单组件参看 antd form [自定义组件](https://4x.ant.design/components/form-cn/#components-form-demo-customized-form-controls) 核心为传递接收 表单值 value、修改表单值方法 onChange
<code src="./demo/demo1.tsx">基本使用</code>

### 字段合并
activeFields与fields的对象使用lodash进行深度拷贝合并，所有在fields字段里需要动态修改的字段需要在activeFields申明才会被动态覆盖

### RformProps

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| fields | 表单字段 | FormFieldProps[] | [] ||
| activeFields | 表单动态字段 | FormFieldProps[] | -||
| rowProps | 栅格 row 属性 属性传给 antd [Row](https://4x.ant.design/components/grid-cn/) | 参考[Row](https://4x.ant.design/components/grid-cn/) | -| -| |
| colProps | form.item 栅格 row 属性批量赋值 属性传给 antd [Col](https://4x.ant.design/components/grid-cn/) | 参考[Col](https://4x.ant.design/components/grid-cn/) | -| -| |
| form | form 实例，不传组件内部会默认生成 [form](https://4x.ant.design/components/form-cn/)| FormInstance | -| -| |

### RformProps.fields

表单
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| visible | 是否显示 | boolean | true | |
| type | 表单类型，根据 type 作为 key 去表单 Rconfig-provider.form 查询组件| string | - | |
| props | 此参数会传递给表单组件 | any | - | |
| keyPath | 必须 form.item 的 name | string \| string[] | - | |
| colProps | form.item 栅格 row 属性单独赋值 [Col](https://4x.ant.design/components/grid-cn/) | 参考[Col](https://4x.ant.design/components/grid-cn/) | - | - | |
| render | 强制渲染使用 render type 将失效 | function | - | |
| ...rest | 多余属性会合并传递给 form.item | any | - | |
