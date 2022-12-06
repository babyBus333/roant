import { Input, Select } from 'antd';
import DropdownAction from 'roant/DropdownAction';
import zhCn from 'roant/locales/zh-CN';

export const defaultConfig: Record<string, any> = {
  table: {
    fieldTypes: {
      dropdownAction: DropdownAction,
    },
  },
  description: {
    fieldTypes: {},
  },
  form: {
    fieldTypes: {
      input: Input,
      select: Select,
    },
    fieldDefaultProps: {
      input: { allowClear: true },
      select: { allowClear: true },
    },
  },
  searchTable: {
    isEnterQuery: false,
  },
  locale: zhCn,
};
