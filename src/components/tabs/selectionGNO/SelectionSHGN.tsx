import React from "react";
import {
  Typography,
  Select,
  Space,
  Divider,
  Radio,
  Form,
  Input,
  Empty,
  Col,
  Row,
  Button,
} from "antd";
import data from "./data.json";

const calculationSetting: SourceDataType[] = [
  {
    type: "input",
    label: "",
    unit: "кач/мин",
    radioValue: "swings",
    radioLabel: "Число качаний",
  },
  {
    type: "input",
    label: "",
    unit: "м3/сут",
    radioValue: "debit",
    radioLabel: "Целевой дебит",
  },
  {
    type: "select",
    label: "Выбор насоса",
    selectValues: [
      { value: "1", label: "LUFKIN C-320-246-74" },
      { value: "2", label: "Скважина 2", disabled: true },
    ],
  },
  {
    type: "select",
    label: "Выбор штанги",
    selectValues: [
      { value: "1", label: "ROD 99/05" },
      { value: "2", label: "Скважина 2", disabled: true },
    ],
  },
];

const sourceData: SourceDataType[] = [
  {
    type: "select",
    label: "Тип СК",
    selectValues: [
      { value: "jack", label: "Стандартная" },
      { value: "disabled", label: "Скважина 2", disabled: true },
    ],
  },
  {
    type: "input",
    label: "Глубина ВДП",
    unit: "м",
  },
  {
    type: "input",
    label: "Глубина спуска насоса",
    unit: "м",
  },
  {
    type: "input",
    label: "Коэффициент заполнения",
    unit: "%",
  },
  {
    type: "input",
    label: "КПД СК",
    unit: "%",
  },
  {
    type: "select",
    label: "Диаметр насоса",
    selectValues: [
      { value: "jack", label: '2"' },
      { value: "disabled", label: "Скважина 2", disabled: true },
    ],
  },
  {
    type: "input",
    label: "Длина хода ПШ",
    unit: "м",
  },
  {
    type: "input",
    label: "Забойная температура",
    unit: "С",
  },
  {
    type: "input",
    label: "Устьевая температура",
    unit: "С",
  },
  {
    type: "input",
    label: "Устьевое давление",
    unit: "бар",
  },
  {
    type: "input",
    label: "Пластовое давление",
    unit: "бар",
  },
  {
    type: "input",
    label: "Обводнённость",
    unit: "%",
  },
];

export const SelectionSHGN = () => {
  const [results, setReuslts] = React.useState<ResultType[]>([]);
  const [selectedOption, setSelectedOption] = React.useState<string>("swings");

  // React.useEffect(() => {
  //   setReuslts(data.resultsSHGN);
  // }, []);

  const handleOptionChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  const fetchResult = async () => {
    setReuslts(data.resultsSHGN);
  }

  return (
    <>
      <Space size={50} style={{ marginTop: 10 }}>
        <Space size={10}>
          <Typography>Скважина:</Typography>
          <Select
            defaultValue="1"
            style={{ width: 200 }}
            options={[
              { value: "1", label: "Скважина 1" },
              { value: "2", label: "Скважина 2", disabled: true },
            ]}
          />
        </Space>
        <Space size={10}>
          <Typography>Причина смены ГНО:</Typography>
          <Select
            defaultValue="1"
            style={{ width: 200 }}
            options={[
              { value: "1", label: "Скважина после ГРП без ГДИС" },
              { value: "2", label: "Скважина 2", disabled: true },
            ]}
          />
        </Space>
        <Button type="primary" onClick={fetchResult}>
          Расчёт
        </Button>
      </Space>
      <Divider />
      <Row>
        <Col span={10}>
          <Form labelCol={{ span: 15 }} style={{ width: "80%" }}>
            <Typography.Title level={3} style={{ marginBottom: 20 }}>
              Настройка расчёта
            </Typography.Title>
            <Radio.Group defaultValue={"swings"} style={{ width: "100%" }}>
              {calculationSetting.map((formItem: SourceDataType) => (
                <Form.Item
                  label={formItem.label}
                  labelAlign="left"
                  style={{ margin: "10px 0" }}
                  key={formItem.label}
                >
                  {formItem.type === "select" ? (
                    <Select
                      options={formItem.selectValues}
                      style={{ width: "100%" }}
                    />
                  ) : (
                    <Space
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Radio
                        value={formItem.radioValue}
                        onChange={handleOptionChange}
                      >
                        {formItem.radioLabel}
                      </Radio>
                      <Input
                        addonAfter={formItem.unit}
                        type="number"
                        style={{ width: "100%" }}
                        disabled={selectedOption != `${formItem.radioValue}`}
                      />
                    </Space>
                  )}
                </Form.Item>
              ))}
            </Radio.Group>
            <Typography.Title level={3} style={{ marginBottom: 20 }}>
              Исходные данные для дизайна
            </Typography.Title>
            {sourceData.map((formItem: SourceDataType) => (
              <Form.Item
                label={formItem.label}
                labelAlign="left"
                style={{ margin: "10px 0" }}
                key={formItem.label}
              >
                {formItem.type === "select" ? (
                  <Select
                    options={formItem.selectValues}
                    style={{ width: "100%" }}
                  />
                ) : (
                  <Input
                    addonAfter={formItem.unit}
                    type="number"
                    style={{ width: "100%" }}
                  />
                )}
              </Form.Item>
            ))}
          </Form>
        </Col>
        <Col span={14}>
          <Form labelCol={{ span: 16 }} style={{ width: 500 }}>
            <Typography.Title level={3} style={{ marginBottom: 20 }}>
              Результаты расчёта дизайна
            </Typography.Title>
            {results.length ? (
              results.map((result: ResultType) => (
                <Form.Item
                  label={result.label}
                  labelAlign="left"
                  style={{ margin: "5px" }}
                  key={result.label}
                >
                  <Input
                    value={result.value}
                    addonAfter={result.unit}
                    size="small"
                  />
                </Form.Item>
              ))
            ) : (
              <Empty description="Нет данных" />
            )}
          </Form>
        </Col>
      </Row>
    </>
  );
};
