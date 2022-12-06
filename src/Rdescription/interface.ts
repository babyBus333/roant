import { ReactNode } from 'react';

export type DescriptionFieldProps = {
  dataIndex: string | string[];
  title?: string | ReactNode;
  className?: string;
  visible?: boolean;
  type?: string;
  props?: Record<string, any>;
  colProps?: Record<string, any>;
  render?: ({ value, record }: { value: any; record: any }) => any;
};

export type DescriptionProps = {
  dataSource: Record<string, any>;
  fields: DescriptionFieldProps[];
  activeFields?: DescriptionFieldProps[];
  emptyHolder?: string;
  rowProps?: Record<string, any>;
  colProps?: Record<string, any>;
  loading?: boolean;
  titleSuffix?: string;
};
