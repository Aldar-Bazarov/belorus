import React from 'react'
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { SelectionUECN } from '@components/tabs/selectionGNO/SelectionUECN';
import { SelectionSHGN } from '@components/tabs/selectionGNO/SelectionSHGN';

const menuItems: TabsProps['items'] = [
  {
    key: "1",
    label: "Подбор УЭЦН",
    children: <SelectionUECN />
  },
  {
    key: "2",
    label: "Подбор ШГН",
    children: <SelectionSHGN />
  },
];

export const SelectionGNO: React.FC = () => {
  return (
    <Tabs defaultActiveKey="1" items={menuItems} />
  )
};