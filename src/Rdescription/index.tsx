import { Col, Row, Spin } from 'antd';
import { get } from 'lodash';
import React, { createElement, Fragment, isValidElement, useEffect, useState } from 'react';
import useConfig from 'roant/hooks/useConfig';
import { getKey, mergeField } from 'roant/utils/array';
import { isNil } from 'roant/utils/object';
import './index.less';
import { DescriptionFieldProps, DescriptionProps } from './interface';

const createDescriptionItemRender = ({
  field,
  emptyHolder,
  cellElement,
}: {
  field: DescriptionFieldProps;
  emptyHolder: string;
  cellElement: any;
}) => {
  const { render, props } = field;
  const renderFn = render || cellElement;

  return ({ value, record, index }: { value: any; record: any; index: number }) => {
    const otherProps = typeof props === 'function' ? props({ value, record, index }) : props;
    const mergedProps = { ...otherProps, value, record, index };

    const renderValue = renderFn ? renderFn(mergedProps) : value;
    const result = isValidElement(renderValue)
      ? createElement(renderFn, mergedProps, mergedProps?.children)
      : renderValue;

    return isNil(result) ? emptyHolder : result;
  };
};

const getDescriptionItem = ({
  field,
  colProps,
  index,
  dataSource,
  titleSuffix,
}: {
  field: any;
  colProps?: Record<string, any>;
  index: number;
  dataSource: Record<string, any>;
  titleSuffix: string;
}) => {
  let mergeColProps = colProps || field.colProps;
  if (colProps && field.colProps) {
    mergeColProps = { ...colProps, ...field.colProps };
  }
  const ItemContainer = mergeColProps ? Col : Fragment;
  const renderProps = {
    value: get(dataSource, field.dataIndex),
    index,
    record: dataSource,
  };

  return (
    <ItemContainer key={getKey(field.dataIndex)} {...mergeColProps}>
      <div className={`r-description-item ${field.className || ''}`}>
        {field.title && (
          <div className="r-description-title">
            {field.title}
            {titleSuffix}
          </div>
        )}
        <div className="r-description-content">{field.render(renderProps)}</div>
      </div>
    </ItemContainer>
  );
};

const RDescription = ({
  dataSource,
  rowProps,
  activeFields = [],
  fields,
  emptyHolder = '-',
  titleSuffix = '',
  colProps,
  loading,
}: DescriptionProps) => {
  const roantConfig = useConfig();
  const { fieldTypes = {} } = roantConfig.description;
  const [columns, setColumns] = useState<any>([]);

  useEffect(() => {
    const tableFields = mergeField<DescriptionFieldProps>(fields, activeFields, 'dataIndex');
    const tableColumns = tableFields
      .filter(({ visible }) => visible !== false)
      .map((field) => {
        const { type } = field;

        return {
          ...field,
          render: createDescriptionItemRender({
            field,
            emptyHolder,
            cellElement: fieldTypes[type as string],
          }),
        };
      });

    setColumns(tableColumns);
  }, [activeFields]);

  const FormLayoutContainer = rowProps ? Row : Fragment;

  if (columns.length && dataSource) {
    return (
      <Spin spinning={loading}>
        <div className="r-description">
          <FormLayoutContainer {...rowProps}>
            {columns.map((item: any, index: any) =>
              getDescriptionItem({ field: item, colProps, index, dataSource, titleSuffix }),
            )}
          </FormLayoutContainer>
        </div>
      </Spin>
    );
  }
  return null;
};

RDescription.defaultProps = {
  dataSource: {},
  activeFields: [],
  emptyHolder: '-',
  loading: false,
};

RDescription.displayName = 'RDescription';

export * from './interface';
export default RDescription;
