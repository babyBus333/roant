import { Input, Select } from 'antd';
import DropdownAction from 'rant/DropdownAction';
import zhCn from 'rant/locales/zh-CN';

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
  locale: zhCn,
};
