import { Col, Form, Input } from 'antd';
import React, { useMemo } from 'react';
import { FormItemProps } from './interface';
import { getPlaceHolder, getRequiredMessage } from './utils';

const FormItem: React.FC<FormItemProps> = (itemProps) => {
  const {
    props,
    render,
    visible,
    formElement,
    commonColProps,
    keyPath,
    required,
    defaultProps,
    formLocale,
    colProps,
    ...rest
  } = itemProps;
  const FormComponent = useMemo(() => {
    if (typeof render === 'function') {
      return render;
    }
    if (formElement) {
      return formElement as any;
    }
    return Input;
  }, [render]);

  let mergeColProps = commonColProps || colProps;
  if (commonColProps && colProps) {
    mergeColProps = { ...commonColProps, ...colProps };
  }
  const ItemContainer = mergeColProps ? Col : React.Fragment;

  const formItemProps = {
    ...rest,
    label: rest.name,
    name: keyPath,
    rules: required
      ? [
          {
            required: true,
            message: getRequiredMessage<FormItemProps>(itemProps, formLocale),
          },
          ...(rest.rules || []),
        ]
      : rest.rules,
  };

  const mergeFormComponentProps = {
    placeholder: getPlaceHolder<FormItemProps>(itemProps, formLocale),
    ...defaultProps,
    ...props,
  };

  if (visible === false) return null;
  return (
    <ItemContainer {...mergeColProps}>
      <Form.Item {...formItemProps}>
        {FormComponent && <FormComponent {...mergeFormComponentProps} />}
      </Form.Item>
    </ItemContainer>
  );
};

export default FormItem;
