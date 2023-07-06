import React from "react";
import { Layout, Tabs, Typography  } from "antd";
import MainPage from "@components/pages/MainPage";
import { UpdateIM } from "@components/pages/UpdateIM";
import { SelectionGNO } from "@components/pages/SelectionGNO";
import { CalculationWhatIf } from "@components/pages/CalculationWhatIf";

const siderItems = [
  {
    key: "1",
    label: <Typography.Title level={5} style={{margin: 0}}>Белоруснефть</Typography.Title>,
    children: <MainPage />,
  },
  {
    key: "2",
    label: `Актуализация ИМ`,
    children: <UpdateIM />,
  },
  {
    key: "3",
    label: `Подбор ГНО`,
    children: <SelectionGNO />,
  },
  {
    key: "4",
    label: `Расчёт "что - если"`,
    children: <CalculationWhatIf/>,
  },
];

export const AppContainer: React.FC = () => {
  return (
    <Layout>
      <Tabs
        defaultActiveKey="1"
        tabPosition="left"
        type="card"
        items={siderItems}
      />
    </Layout>
  );
};
