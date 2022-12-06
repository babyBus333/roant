import { Table as AntdTable } from 'antd';
import { get } from 'lodash';
import React, {
  createElement,
  Fragment,
  isValidElement,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import useConfig from 'roant/hooks/useConfig';
import { mergeField } from 'roant/utils/array';
import { isNil } from 'roant/utils/object';
import { replaceKeyWord } from 'roant/utils/string';
import { TableFieldProps, TableProps } from './interface';

// 劫持antd table.render函数
const createTableCellRender = (
  field: TableFieldProps,
  emptyHolder: string | ReactNode,
  cellElement: any,
) => {
  const { render, props } = field;
  const renderFn = render || cellElement;

  return (...args: [any, Record<string, any>, number]) => {
    const [value, record, index] = args;

    const otherProps = typeof props === 'function' ? props({ value, record, index }) : props;
    const mergedProps = { ...otherProps, value, record, index };

    const renderValue = renderFn ? renderFn(mergedProps) : value;
    const result = isValidElement(renderValue)
      ? createElement(renderFn, mergedProps, mergedProps?.children)
      : renderValue;

    return isNil(result) ? emptyHolder : result;
  };
};

const Table = ({
  activeFields = [],
  fields,
  emptyHolder,
  pagination,
  total,
  tableContainer,
  tableContainerProps,
  ...props
}: TableProps) => {
  const roantConfig = useConfig();
  const fieldTypes = roantConfig?.table?.fieldTypes;
  const { table: tableLocale } = roantConfig.locale;
  const [columns, setColumns] = useState<Record<string, any>[]>([]);

  useEffect(() => {
    const tableFields = mergeField<TableFieldProps>(fields, activeFields, 'dataIndex');
    const tableColumns = tableFields
      .filter(({ visible }) => visible !== false)
      .map((field) => {
        const { shouldCellUpdate, type, dataIndex } = field;
        let shouldCellUpdateFn;

        if (shouldCellUpdate === undefined && type === undefined) {
          shouldCellUpdateFn = (record: any, prevRecord: any) =>
            get(record, dataIndex) !== get(prevRecord, dataIndex);
        }

        return {
          ...field,
          render: createTableCellRender(field, emptyHolder, fieldTypes[type as string]),
          shouldCellUpdate: shouldCellUpdateFn || shouldCellUpdate,
        };
      });

    setColumns(tableColumns);
  }, [activeFields, fields]);

  const mergedPagination = pagination !== false && {
    showSizeChanger: true,
    showTotal: (total: number) => replaceKeyWord(tableLocale.showTotal, { total }),
    showQuickJumper: true,
    total,
    defaultPageSize: 10,
    ...pagination,
  };

  const AntdTableContainer = tableContainer || Fragment;

  if (columns.length) {
    return (
      <div className="r-table">
        <AntdTableContainer {...tableContainerProps}>
          <AntdTable {...props} columns={columns} pagination={mergedPagination || pagination} />
        </AntdTableContainer>
      </div>
    );
  }
  return null;
};

Table.defaultProps = {
  dataSource: [],
  activeFields: [],
  total: 0,
  emptyHolder: '-',
};

Table.displayName = 'RTable';

export * from './interface';
export default Table;
