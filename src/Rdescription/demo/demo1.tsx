import React from 'react';
import { Rdescription } from 'roant';
import { DescriptionFieldProps } from 'roant/Rdescription';

const tagStyle = {
  padding: '5px 10px',
  marginRight: 10,
  backgroundColor: 'aqua',
  display: 'inline-block',
};

const fields: DescriptionFieldProps[] = [
  { dataIndex: 'name', title: '姓名' },
  { dataIndex: 'mobile', title: '电话' },
  { dataIndex: 'age', title: 'age' },
  // 单独占一行
  { dataIndex: 'height', colProps: { span: 24 } },
  { dataIndex: 'weight', title: 'weight' },
  {
    dataIndex: 'tags',
    title: 'tags',
    render({ value, record }) {
      const onClick = () => {
        console.log('record', record);
      };
      return (value as string[]).map((item) => (
        <div onClick={onClick} style={tagStyle} key={item}>
          {item}
        </div>
      ));
    },
  },
];

const dataSource = {
  name: '张1',
  mobile: '112',
  age: 20,
  height: '180cm(单独占一行)',
  weight: '90kg',
  tags: ['123', '520'],
};

export default () => {
  const descriptionProps = {
    rowProps: { gutter: [30, 0] },
    colProps: { span: 8 },
    fields,
    dataSource,
  };

  return <Rdescription {...descriptionProps} />;
};
