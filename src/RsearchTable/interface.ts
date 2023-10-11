import { FormInstance } from 'antd';
import { FormProps } from '../Rform/interface';
import { TableProps } from '../Rtable/interface';

export type SearchTableActionMethods = {
  onQuery: (param?: Record<string, any>) => void;
  onReset: () => void;
};

export type SearchTableProps = {
  fetchData: (searchParam: Record<string, any>) => void;
  tableProps: TableProps;
  formProps?: FormProps;
  total: number;
  dataSource: Record<string, any>[];
  ref: React.Ref<SearchTableActionMethods>;
  autoQuery?: boolean;
  toolbar?: React.ReactNode;
  form?: FormInstance;
  pageSizeKey?: string;
  pageCurrentKey?: string;
  defaultSize?: number;
  defaultCurrent?: number;
  isEnterQuery?: boolean;
};
