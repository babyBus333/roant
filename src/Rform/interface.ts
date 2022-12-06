import { FormInstance, FormProps as AntdFormProps } from 'antd';
import { FormItemProps as AntdFormItemProps } from 'antd/lib/form/FormItem';

export type ColumnKey = string | string[];

export type FormFieldProps = AntdFormItemProps & {
  visible?: boolean;
  type?: string;
  props?: Record<string, any>;
  keyPath: string | string[];
  formElement?: React.ReactNode;
  colProps?: Record<string, any>;
  render?: (props: Record<string, any>) => any;
};

export type FormItemProps = FormFieldProps & {
  formLocale: Record<string, any>;
  commonColProps?: Record<string, any>;
  defaultProps?: Record<string, any>;
};

export type FormProps = Omit<AntdFormProps, 'fields'> & {
  fields: FormFieldProps[];
  activeFields?: (FormFieldProps & Record<string, any>)[];
  rowProps?: Record<string, any>;
  colProps?: Record<string, any>;
  form?: FormInstance;
};
