import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import { Button, ButtonProps, Divider, Dropdown, DropDownProps, Menu, Space } from 'antd';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { omit } from 'lodash';
import React, { ComponentType } from 'react';

export type ActionButtonProps = {
  key?: string;
  name?: string;
  visible?: boolean;
  icon?: ComponentType<CustomIconComponentProps>;
} & ButtonProps;

type DropdownActionProps = {
  options: ActionButtonProps[];
  visibleCount?: number; // 展示操作数量，多余的将会被下拉收纳
  moreText?: string;
} & DropDownProps;

/**
 * 下拉菜单式操作栏
 */
const DropdownAction = ({
  options,
  visibleCount,
  moreText,
  ...props
}: DropdownActionProps): JSX.Element => {
  const visibleOptions = options.filter(({ visible }) => visible !== false);
  const [showOptions, dropdownOptions] = [
    visibleOptions.slice(0, visibleCount),
    visibleOptions.slice(visibleCount),
  ];

  const showElement = showOptions.map((option) => (
    <Button
      key={option.key || option.name}
      type="link"
      {...omit(option, ['key', 'name', 'visible', 'icon'])}
    >
      <Space size={6}>
        {option.icon && <Icon component={option.icon as any} />}
        <span>{option.name}</span>
      </Space>
    </Button>
  ));

  const menuItems = dropdownOptions.map((option) => ({
    label: (
      <Button type="link" {...omit(option, ['key', 'name', 'visible', 'icon'])}>
        <Space size={6}>
          {option.icon && <Icon component={option.icon as any} />}
          <span>{option.name}</span>
        </Space>
      </Button>
    ),
    key: option.key || option.name,
  }));

  const dropdownProps: DropDownProps = {
    placement: 'bottom',
    arrow: true,
    overlay: <Menu items={menuItems as ItemType[]} />,
    ...props,
  };
  const dropdownElement = dropdownOptions.length ? (
    <Dropdown {...dropdownProps}>
      <Button type="link">{moreText}</Button>
    </Dropdown>
  ) : null;

  return (
    <Space
      className="r-dropdown-action"
      size={0}
      split={<Divider type="vertical" style={{ borderLeft: '1px solid #E4E7EE' }} />}
    >
      {showElement}
      {dropdownElement}
    </Space>
  );
};

DropdownAction.defaultProps = {
  visibleCount: 3,
  moreText: '更多',
};

export default DropdownAction;
