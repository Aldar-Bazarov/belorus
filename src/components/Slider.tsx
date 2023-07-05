import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import type { MenuProps } from 'antd';

const items: MenuProps['items'] = [
  {
    key: "0",
    label: (
      <Link to="/" style={{fontSize: 20, fontWeight: 600}}>
        Белоруснефть
      </Link>
    ),
  },
  {
    key: "1",
    label: (
      <Link to="/updateIM">
        Актуализация ИМ
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link to="/selectionGNO">
        Подбор ГНО
      </Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link to="/calculation">
        Расчёт "что - если"
      </Link>
    ),
  },
];

const Slider: React.FC = () => {
  return (
    <Layout.Sider width={200}>
      <Menu
        mode="inline"
        style={{ height: "100%", borderRight: 0 }}
        items={items}
      />
    </Layout.Sider>
  );
};

export default Slider;
