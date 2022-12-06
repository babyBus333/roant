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
      props(param: { value: any; record: any; index: number }) {
        // 传递方法会传入param { value:根据dataIndex获取的值, record:当前行表格数据, index:表格index }
        // 返回的参数会传递给 type 对应的组件或者 render
        return {
          options: [
            {
              name: '编辑',
              onClick() {
                console.log('on edit', param);
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
