import React from 'react'
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { SelectionUECN } from '../tabs/selectionGNO/SelectionUECN';
import { SelectionSHGN } from '../tabs/selectionGNO/SelectionSHGN';

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
  {
    key: "3",
    label: "Оптимизация УЭЦН",
  },
  {
    key: "4",
    label: "Оптимизация ШГН",
  },
  {
    key: "5",
    label: "Глубина спуска ГНО",
  },
];

export const SelectionGNO: React.FC = () => {
  return (
    <Tabs defaultActiveKey="1" items={menuItems} />
  )
};