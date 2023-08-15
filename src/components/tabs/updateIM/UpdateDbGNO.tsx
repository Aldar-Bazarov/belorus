import React from "react";
import type { RadioChangeEvent } from "antd/lib";
import { Radio, Button, Space } from "antd";
import { Table } from "@ois-design-ui/components";
import { IColumnType } from "@ois-design-ui/components/lib/components/table";

interface DataType {
  key: React.Key;
  manufacturer: string;
  name: string;
  nominalFrequency: number;
  diameter: number;
  leftBorder: number | null;
  rightBorder: number | null;
}

const columns: IColumnType<DataType>[] = [
  {
    title: "Производитель",
    dataIndex: "manufacturer",
    width: 100,
  },
  {
    title: "Название",
    dataIndex: "name",
    width: 100,
  },
  {
    title: "Номинальная частота, Гц",
    dataIndex: "nominalFrequency",
    width: 100,
  },
  {
    title: "Диаметр, мм",
    dataIndex: "diameter",
    width: 100,
  },
  {
    title: "Левая граница, м3/сут",
    dataIndex: "leftBorder",
    width: 100,
  },
  {
    title: "Правая граница, м3/сут",
    dataIndex: "rightBorder",
    width: 100,
  },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    manufacturer: "BORETS",
    name: "ECNAKI5-30",
    nominalFrequency: 50,
    diameter: 92,
    leftBorder: 25,
    rightBorder: 45,
  });
}

const radioOptions = [
  { label: "Формирование БД спущенного ГНО (ЭЦН)", value: "lowerGNO" },
  { label: "Формирование БД эталонного ГНО (ЭЦН)", value: "standartGNO" },
  { label: "Формирование БД штанг ШГН", value: "barbellSHGN" },
];

export const UpdateDbGNO = () => {
  const [radioValue, setRadioValue] = React.useState<string>("lowerGNO");
  const [isVisibleDate, setIsVisibleDate] = React.useState<boolean>(false);

  const fetchResult = async () => {};

  const generateDatabase = async () => {
    if (radioValue === "standartGNO") {
      setIsVisibleDate(true);
    } else {
      setIsVisibleDate(false);
    }
  };

  const handleRadioChange = ({ target: { value } }: RadioChangeEvent) => {
    setRadioValue(value);
    if (value !== "standartGNO") {
      setIsVisibleDate(false);
    }
  };
  return (
    <>
      <Space
        direction="vertical"
        size="large"
        style={{ padding: "0 16px 0 0" }}
      >
        <Radio.Group
          style={{ display: "flex", flexDirection: "column", rowGap: 15 }}
          options={radioOptions}
          onChange={handleRadioChange}
          value={radioValue}
        />
        <Button type="primary" onClick={generateDatabase} size="large">
          Сформировать БД
        </Button>
        {isVisibleDate && (
          <>
            <Table
              columns={columns}
              dataSource={data}
              height={400}
              selectionType="checkbox"
              showSelectionColumn={true}
            />
            <Button
              type="primary"
              onClick={fetchResult}
              size="large"
              style={{ float: "right" }}
            >
              Сформировать файл
            </Button>
          </>
        )}
      </Space>
    </>
  );
};
