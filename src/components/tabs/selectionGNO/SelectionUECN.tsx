import React from "react";
import {
  Typography,
  Select,
  Space,
  Divider,
  Form,
  Input,
  Empty,
  Col,
  Row,
  Button,
} from "antd";
import data from "./data.json";

const sourceData: SourceDataType[] = [
  {
    type: "input",
    label: "Частота насоса",
    unit: "ГЦ",
  },
  {
    type: "input",
    label: "Макс. диаметр насоса",
    unit: "м",
  },
  {
    type: "input",
    label: "Длина кабеля",
    unit: "м",
  },
  {
    type: "input",
    label: "Коэффициент операции",
    unit: "%",
  },
  {
    type: "input",
    label: "Целевая производительность",
    unit: "м3/сут",
  },
  {
    type: "input",
    label: "Пластовое давление",
    unit: "бар",
  },
  {
    type: "input",
    label: "Обводненность",
    unit: "%",
  },
  {
    type: "input",
    label: "Общий ГФ",
    unit: "м3/м3",
  },
  {
    type: "input",
    label: "Устьевое давление",
    unit: "бар",
  },
  {
    type: "input",
    label: "Запас по мощности двигателя",
    unit: "%",
  },
  {
    type: "input",
    label: "Коэффициент износа насоса",
    unit: "д.ед.",
  },
  {
    type: "select",
    label: "Корреляция МФП",
    selectValues: [
      { value: "jack", label: "Beggs and Brill" },
      { value: "disabled", label: "Скважина 2", disabled: true },
    ],
  },
];

const equipment: SourceDataType[] = [
  {
    type: "select",
    label: "Насос",
    selectValues: [{ value: "2", label: "CENTRILIFT KC11000 0.13275 m" }],
  },
  {
    type: "select",
    label: "ПЭД",
    selectValues: [{ value: "2", label: "Centrilift 544 375HP 2105V 105A" }],
  },
  {
    type: "select",
    label: "Кабель",
    selectValues: [{ value: "2", label: "#1 Cooper 0.85302 (Volts/1000m)" }],
  },
];

export const SelectionUECN = () => {
  const [pumpDesignMode, setPumpDesignMode] = React.useState<ResultType[]>([]);
  const [results, setReuslts] = React.useState<ResultType[]>([]);

  React.useEffect(() => {
    setPumpDesignMode(data.pumpDesignMode);
    setReuslts(data.resultsUECN);
  }, []);

  const fetchResult = async () => {};

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
            <Typography.Title level={5} style={{ marginBottom: 20 }}>
              Исходные данные:
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
            <Typography.Title level={5} style={{ marginBottom: 20 }}>
              Оборудование:
            </Typography.Title>
            {equipment.map((formItem: SourceDataType) => (
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
          <Typography.Title level={3} style={{ marginBottom: 20 }}>
            Результаты расчёта дизайна
          </Typography.Title>
          <Row gutter={[0, 0]}>
            <Col span={10}>
              <Typography.Title level={5} style={{ marginBottom: 20 }}>
                Рачсётный режим работы насоса:
              </Typography.Title>
              {pumpDesignMode.length ? (
                pumpDesignMode.map((result: ResultType) => (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 10,
                    }}
                    key={result.label}
                  >
                    <Typography>{result.label}</Typography>
                    <Input
                      value={result.value}
                      addonAfter={result.unit}
                      size="small"
                      style={{ width: "30%", marginLeft: "auto" }}
                    />
                  </div>
                ))
              ) : (
                <Empty description="Нет данных" />
              )}
            </Col>
            <Col span={2} />
            <Col span={10}>
              <Typography.Title level={5} style={{ marginBottom: 20 }}>
                Результаты:
              </Typography.Title>
              {results.length ? (
                results.map((result: ResultType) => (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 10,
                    }}
                    key={result.label}
                  >
                    <Typography>{result.label}</Typography>
                    <Input
                      value={result.value}
                      addonAfter={result.unit}
                      size="small"
                      style={{ width: "30%", marginLeft: "auto" }}
                    />
                  </div>
                ))
              ) : (
                <Empty description="Нет данных" />
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
