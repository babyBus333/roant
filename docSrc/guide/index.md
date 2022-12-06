---
nav:
  title: 开始
  order: -1
---

# 接入指南

## 环境准备

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

## 安装依赖
 安装npm包
```bash
$ npm i roant -S
```

## 组件库配置

组件库使用 react.context 共享配置项在 react 根组件配置，保证全局组件可访问

```tsx | pure
import { RconfigContext } from 'roant';

<RconfigContext.Provider value={roantConfig}>
  <App />
</RconfigContext.Provider>;
```

## 组件库配置 roantConfig

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

## 国际化 locale

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
