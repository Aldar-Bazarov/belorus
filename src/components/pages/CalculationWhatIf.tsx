import React from 'react'
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const menuItems: TabsProps['items'] = [
  {
    key: "1",
    label: "test 1",
  },
  {
    key: "2",
    label: "test 2",
  },
  {
    key: "3",
    label: "test 3",
  },
];

export const CalculationWhatIf: React.FC = () => {
  return (
    <Tabs defaultActiveKey="1" items={menuItems} />
  )
};