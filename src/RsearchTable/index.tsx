import { Button, Form } from 'antd';
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import useConfig from 'roant/hooks/useConfig';
import Rform from 'roant/Rform';
import Rtable from 'roant/Rtable';
import './index.less';
import { SearchTableActionMethods, SearchTableProps } from './interface';

const DEFAULT_SIZE = 10;
const DEFAULT_CURRENT = 1;

const RsearchTable = (props: SearchTableProps, ref: React.Ref<SearchTableActionMethods>) => {
  const {
    tableProps: externalTableProps,
    fetchData,
    toolbar,
    formProps,
    dataSource,
    total,
    form: outFrom,
    autoQuery = true,
    pageSizeKey = 'size',
    pageCurrentKey = 'current',
    defaultSize = DEFAULT_SIZE,
    defaultCurrent = DEFAULT_CURRENT,
  } = props;
  const noPagination = externalTableProps.pagination === false;
  const defaultPaginationQuery = noPagination
    ? undefined
    : { [pageSizeKey]: defaultSize, [pageCurrentKey]: defaultCurrent };

  const roantConfig = useConfig();
  const [form] = Form.useForm(outFrom);
  const [paginationQuery, setPaginationQuery] = useState(defaultPaginationQuery);
  const [loading, setLoading] = useState(false);
  const { search, reset } = roantConfig.locale.searchTable;
  const isEnterQuery = props.isEnterQuery ?? roantConfig.searchTable?.isEnterQuery;

  const onQuery = async (param?: Record<string, any>) => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      await fetchData({ ...values, ...paginationQuery, ...param });
    } finally {
      setLoading(false);
    }
  };

  const onReset = async () => {
    await form.resetFields();
    setPaginationQuery(defaultPaginationQuery);
    onQuery(defaultPaginationQuery);
  };

  useImperativeHandle(ref, () => ({
    onQuery,
    onReset,
  }));

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    autoQuery && onQuery();
  }, []);

  const toolbarComponent = toolbar ? (
    <div className="r-table-operation-container">{toolbar}</div>
  ) : null;

  const pagination =
    (!noPagination && {
      ...externalTableProps.pagination,
      pageSize: paginationQuery?.[pageSizeKey],
      current: paginationQuery?.[pageCurrentKey],
      onChange(current: number, size: number) {
        const paginationConfig = { [pageCurrentKey]: current, [pageSizeKey]: size };
        setPaginationQuery(paginationConfig);
        onQuery(paginationConfig);
      },
    }) ||
    externalTableProps.pagination;

  const tableProps = {
    loading,
    ...externalTableProps,
    dataSource,
    total,
    pagination,
  };

  const onSearch = () => {
    if (!isEnterQuery) {
      setPaginationQuery(defaultPaginationQuery);
      onQuery(defaultPaginationQuery);
    }
  };

  const enterSubmit = () => {
    setPaginationQuery(defaultPaginationQuery);
    onQuery(defaultPaginationQuery);
  };

  const ActionComponent = (
    <>
      <Button
        loading={tableProps.loading}
        htmlType={isEnterQuery ? 'submit' : 'button'}
        type="primary"
        onClick={onSearch}
      >
        {search}
      </Button>
      <Button style={{ margin: '0 8px' }} onClick={onReset}>
        {reset}
      </Button>
    </>
  );
  return (
    <div className="r-search-table">
      {formProps && (
        <div className="r-search-form-container">
          <Rform {...formProps} onFinish={enterSubmit} form={form}>
            <div className="r-search-table-action-container">{ActionComponent}</div>
          </Rform>
        </div>
      )}
      {toolbarComponent}
      <Rtable {...tableProps} />
    </div>
  );
};

export * from './interface';
export default forwardRef(RsearchTable);
