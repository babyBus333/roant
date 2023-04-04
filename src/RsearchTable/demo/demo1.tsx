import React from 'react';
import { RsearchTable } from 'roant';
import { SearchTableActionMethods, SearchTableProps } from 'roant/RsearchTable';

const getData = (param: any) => {
  console.log(param);
  return new Promise<{ rows: any; total: number }>((resolve) => {
    setTimeout(() => {
      const list = new Array(10).fill(1).map((_, index) => ({
        id: index,
        name: `name${index}`,
        age: `age${index}`,
      }));
      resolve({ rows: list, total: 30 });
    }, 2000);
  });
};

const fields = [
  {
    keyPath: 'name',
    name: '姓名',
  },
  {
    keyPath: 'age',
    type: 'select',
    name: '年龄',
    props: {
      options: [
        { label: '两年半', value: 2.5 },
        { label: '两年', value: 2 },
        { label: '五年', value: 5 },
      ],
    },
    initialValue: 2.5,
  },
];

export default () => {
  const actionRef = React.useRef<SearchTableActionMethods>(null);
  const [pageData, setPageData] = React.useState<{ dataSource: any; total: number }>({
    dataSource: [],
    total: 0,
  });

  const searchProps: SearchTableProps = {
    tableProps: {
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
          props({ record }: { record: any }) {
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
      rowKey: 'id',
    },
    ref: actionRef,
    formProps: {
      layout: 'vertical',
      rowProps: { gutter: [24, 0] },
      colProps: { span: 4 },
      fields: fields,
    },
    ...pageData,
    async fetchData(params) {
      const { rows, total } = await getData(params);
      console.log(rows, total);
      setPageData({ dataSource: rows, total });
    },
    toolbar: <button type="button">创建</button>,
  };

  return <RsearchTable {...searchProps} />;
};
