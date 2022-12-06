# [roant](https://babybus333.github.io/roant)

基于 antd-design 封装复合组件库

## 特点
- 使用配置生成表格表单
- 无 ui 副作用、所有参数透传 antd 组件
- 使用的工具组件支持依赖注入

antd 写表单

```typescript
<Form
  name="basic"
  labelCol={{ span: 8 }}
  wrapperCol={{ span: 16 }}
  style={{ maxWidth: 600 }}
  initialValues={{ remember: true }}
  onFinish={onFinish}
  onFinishFailed={onFinishFailed}
  autoComplete="off"
>
  <Form.Item<FieldType>
    label="姓名"
    name="username"
    rules={[{ required: true, message: 'Please input your username!' }]}
  >
    <Input />
  </Form.Item>

  <Form.Item<FieldType>
    label="密码"
    name="password"
    rules={[{ required: true, message: 'Please input your password!' }]}
  >
    <Input.Password />
  </Form.Item>

  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
    <Button type="primary" htmlType="submit">
      Submit
    </Button>
  </Form.Item>
</Form>
```

roant 写表单

```typescript
const formProps: FormProps = {
  form,
  layout: 'vertical',
  rowProps: { gutter: [30, 0] },
  colProps: { span: 12 },
  fields: [
    {
      keyPath: 'username',
      name: '姓名',
      required: true,
    },
    {
      keyPath: 'password',
      name: '密码',
      required: true,
      type: 'password',
    },
  ],
};
<RForm {...formProps} />;
```

## [快速接入](https://babybus333.github.io/roant/guide)
### 环境准备

因同步依赖了 react antd 所以项目需要先保证 peerDependencies 依赖安装

```bash
# peerDependencies
{
    "@ant-design/icons": ">=4.0.0",
    "antd": ">=4.20",
    "react": ">=16.9.0",
    "react-dom": ">=16.9.0"
}
```

### 安装依赖 
安装npm包
```bash
$ npm i roant -S
```

### 组件库配置

组件库使用 react.context 共享配置项在 react 根组件配置，保证全局组件可访问

```tsx | pure
import { RconfigContext } from 'roant';

<RconfigContext.Provider value={roantConfig}>
  <App />
</RconfigContext.Provider>;
```

### 组件库配置 roantConfig

```js
{
  table: {
    // table组件配置
    fieldTypes: {
      dropdownAction: DropdownAction,
    },
  },
  description: {
    fieldTypes: {},
  },
  form: {
    // 表单form组件配置
    fieldTypes: {
      input: Input,
      select: Select,
    },
    // 表单form组件默认属性
    fieldDefaultProps: {
      input: { allowClear: true },
      select: { allowClear: true },
    },
  },
  // 语言配置
  locale: zhCn,
}
```

### 国际化 locale

目前默认使用中文，其他语言需自行配置

```js
{
  table: {
    showTotal: '共{total}条',
  },
  form: {
    // 表单默认渲染placeholder
    placeholder: {
      input: '请输入{name}',
      select: '请选择{name}',
      default: '请选择{name}',
    },
    // 表单默认渲染required
    required: {
      input: '请输入{name}',
      select: '请选择{name}',
      default: '请选择{name}',
    },
  },
  searchTable: {
    search: '搜索',
    reset: '重置',
  },
}
```

