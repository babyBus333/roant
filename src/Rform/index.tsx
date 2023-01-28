import { Form as AntdForm, Row } from 'antd';
import React, { useMemo } from 'react';
import useConfig from 'roant/hooks/useConfig';
import { getKey, mergeField } from 'roant/utils/array';
import FormItem from './FormItem';
import { FormFieldProps, FormProps } from './interface';

const DEFAULT_TYPE = 'input';

const Form = ({
  activeFields = [],
  fields = [],
  children,
  rowProps,
  colProps,
  ...props
}: FormProps) => {
  const roantConfig = useConfig();
  const { fieldTypes, fieldDefaultProps } = roantConfig.form;

  const formChildren = useMemo(
    () =>
      mergeField<FormFieldProps>(fields, activeFields, 'keyPath').map((field) => (
        <FormItem
          {...field}
          key={getKey(field.keyPath)}
          commonColProps={colProps}
          formElement={fieldTypes[field.type || DEFAULT_TYPE]}
          defaultProps={field.render ? undefined : fieldDefaultProps[field.type || DEFAULT_TYPE]}
          formLocale={roantConfig.locale.form}
        />
      )),
    [activeFields],
  );

  const FormLayoutContainer = rowProps ? Row : React.Fragment;
  return (
    <AntdForm {...props}>
      <FormLayoutContainer {...rowProps}>
        <>
          {formChildren}
          {children}
        </>
      </FormLayoutContainer>
    </AntdForm>
  );
};

Form.displayName = 'RForm';

export * from './interface';
export default Form;
