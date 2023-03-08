import React from 'react';
import { Rdescription } from 'rokid-roant';
import { DescriptionFieldProps } from 'rokid-roant/Rdescription';

const fields: DescriptionFieldProps[] = [
  { dataIndex: 'name', title: '姓名' },
  { dataIndex: 'mobile', title: '电话' },
  { dataIndex: 'age', title: 'age' },
  { dataIndex: 'height', colProps: { span: 24 } },
  { dataIndex: 'weight', title: 'weight' },
];

const dataSource = {
  name: '张1',
  mobile: '112',
  age: 20,
  height: '180cm',
  weight: '90kg',
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
