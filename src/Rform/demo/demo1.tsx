import { Form } from 'antd';
import React from 'react';
import RForm, { FormProps } from 'roant/Rform';

const fields = [
  {
    keyPath: 'name',
    name: '姓名',
    required: true,
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
] as FormProps['fields'];

export default () => {
  const [form] = Form.useForm();
  const [nameVisible, setNameVisible] = React.useState(true);
  const formProps: FormProps = {
    form,
    layout: 'vertical',
    rowProps: { gutter: [30, 0] },
    colProps: { span: 12 },
    fields,
    activeFields: [{ keyPath: 'name', visible: nameVisible }],
  };
  return (
    <>
      <button type="button" onClick={() => setNameVisible(!nameVisible)}>
        姓名
      </button>
      <RForm {...formProps} />
    </>
  );
};
