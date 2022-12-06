import { TableProps as AntdTableProps } from 'antd/lib/table';
import { ColumnProps } from 'antd/lib/table/Column';

export type ColumnKey = string | string[];

export type TableFieldProps = ColumnProps<Record<string, any>> & {
  dataIndex: string | string[];
  visible?: boolean;
  type?: string;
  props?: Record<string, any>;
};

export interface TableProps extends AntdTableProps<Record<string, any>> {
  dataSource?: Record<string, any>[];
  total?: number;
  fields: TableFieldProps[];
  activeFields?: TableFieldProps[];
  emptyHolder?: string;
  tableContainer?: React.FC<any>;
  tableContainerProps?: Record<string, any>;
}
