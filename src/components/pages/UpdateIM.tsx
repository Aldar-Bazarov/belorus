import React from 'react'
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { UpdateGDM } from '@components/tabs/updateIM/UpdateGDM';
import { UpdateMBAL } from '@components/tabs/updateIM/UpdateMBAL';
import { UpdateDbGNO } from '@components/tabs/updateIM/UpdateDbGNO';

const menuItems: TabsProps['items'] = [
  {
    key: "1",
    label: "Обновление ГДМ",
    children: <UpdateGDM />
  },
  {
    key: "2",
    label: "Обновление MBAL",
    children: <UpdateMBAL />
  },
  {
    key: "3",
    label: "Обновление БД ГНО",
    children: <UpdateDbGNO />
  },
];

export const UpdateIM: React.FC = () => {
  return (
    <Tabs defaultActiveKey="1" items={menuItems} />
  )
};