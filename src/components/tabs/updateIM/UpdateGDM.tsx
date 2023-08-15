import React from "react";
import type { DatePickerProps } from "antd/lib";
import {
  Typography,
  Select,
  Space,
  Divider,
  Checkbox,
  Card,
  List,
  Button,
  DatePicker,
} from "antd";

const data = [
  {
    value: "1",
    label: "Речицкое",
    models: [
      "Модель №1",
      "Модель №2",
      "Модель №3",
      "Модель №4",
      "Модель №5",
      "Модель №6",
      "Модель №7",
      "Модель №8",
      "Модель №9",
      "Модель №10",
      "Модель №11",
      "Модель №12",
      "Модель №13",
      "Модель №14",
      "Модель №15",
      "Модель №1",
      "Модель №2",
      "Модель №3",
      "Модель №4",
      "Модель №5",
      "Модель №6",
      "Модель №7",
      "Модель №8",
      "Модель №9",
      "Модель №10",
      "Модель №11",
      "Модель №12",
      "Модель №13",
      "Модель №14",
      "Модель №15",
    ],
  },
  {
    value: "2",
    label: "Месторождение 2",
    models: ["Модель №1", "Модель №2", "Модель №3"],
  },
];

export const UpdateGDM: React.FC = () => {
  const [models, setModels] =
    React.useState<{ model: string; checked: boolean }[]>();
  const [selectAllModels, setSelectAllModels] = React.useState<boolean>();
  const [startDate, setStartDate] = React.useState<string>();
  const [endDate, setEndDate] = React.useState<string>();
  const fetchResult = async () => {};

  const onChange = (date: any, dateString: string, dateType: string) => {
    if (dateType === "start") {
      setStartDate(dateString);
    } else {
      setEndDate(dateString);
    }
  };

  const handleBorehole = (value: string) => {
    const currentBoreholeModels = data.find((el) => el.value === value).models;
    const filtredModels = currentBoreholeModels.map((el) => {
      return { model: el, checked: false };
    });
    setModels(filtredModels);
  };

  const handleAllModels = (e: any) => {
    const checked = e.target.checked;
    const updatedModels = models.map((item) => ({ ...item, checked }));

    setModels(updatedModels);
    setSelectAllModels(checked);
  };

  const handleModel = (e: any, model: string) => {
    const updatedModels = models.map((item) => {
      if (item.model === model) {
        return { ...item, checked: e.target.checked };
      }
      return item;
    });

    setModels(updatedModels);

    const allModelsChecked = updatedModels.every((item) => item.checked);
    setSelectAllModels(allModelsChecked);
  };

  React.useEffect(() => {
    handleBorehole(data[0].value);
  }, []);

  return (
    <>
      <Space direction="vertical" style={{ width: "30%" }} size={10}>
        <Space
          size={10}
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
          }}
        >
          <Typography>Месторождение:</Typography>
          <Select
            defaultValue="1"
            onChange={handleBorehole}
            style={{ width: 150 }}
            options={data}
          />
        </Space>
        <Space
          size={10}
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
          }}
        >
          <Typography>Дата начала:</Typography>
          <DatePicker
            onChange={(date, dateString) => onChange(date, dateString, "start")}
            format={"DD.MM.YYYY"}
            placeholder="дд.мм.гггг"
            style={{ width: 150 }}
          />
        </Space>
        <Space
          size={10}
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
          }}
        >
          <Typography>Дата окончания:</Typography>
          <DatePicker
            onChange={(date, dateString) => onChange(date, dateString, "end")}
            format={"DD.MM.YYYY"}
            placeholder="дд.мм.гггг"
            style={{ width: 150 }}
          />
        </Space>
        <Divider />
        <Typography.Title level={5} style={{ margin: 0 }}>
          Выбор модели:
        </Typography.Title>
        <Card style={{ height: "500px", overflowY: "scroll" }}>
          <Checkbox onChange={handleAllModels} checked={selectAllModels}>Выбирать все модели</Checkbox>
          <Divider style={{ margin: "10px 0 0" }} />
          <List
            itemLayout="horizontal"
            dataSource={models}
            renderItem={(item) => (
              <List.Item style={{ marginLeft: 10 }}>
                <Checkbox
                  checked={item.checked}
                  onChange={(e) => handleModel(e, item.model)}
                >
                  {item.model}
                </Checkbox>
              </List.Item>
            )}
          />
        </Card>
        <Button
          type="primary"
          onClick={fetchResult}
          style={{ float: "right" }}
          size="large"
        >
          Сформировать Schedule
        </Button>
      </Space>
    </>
  );
};
