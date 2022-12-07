# Rtable

```jsx
import { Rtable } from 'roant';

const data = [
  { id: 1, name: 'ikun', age: 2.5 },
  { id: 2, name: 'ikun2', age: '' },
];

const tableProps = {
  fields: [
    { title: '名称', dataIndex: 'name' },
    { title: '年龄', dataIndex: 'age' },
  ],
  activeFields: [
    {
      title: '操作',
      dataIndex: 'dropdownAction',
      type: 'dropdownAction',
      fixed: 'right',
      props({ record }) {
        return {
          options: [
            {
              name: '编辑',
              onClick() {
                console.log('on edit', record);
              },
            },
          ],
        };
      },
    },
  ],
  dataSource: data,
  rowKey: 'id',
};

export default () => <Rtable {...tableProps} />;
```
