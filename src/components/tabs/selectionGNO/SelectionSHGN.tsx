import React from 'react'
import { Typography, Select, Space, Divider, Radio, Form, Input, Empty, Col, Row } from 'antd';


const calculateResult = (values: any) => {
  console.log('Success:', values);
};

type ResultType = {
  label: string,
  value: number,
  unit: string
}

type SourceDataType = {
  type: string,
  label: string,
  selectValues?: { value: string, label: string, disabled?: boolean }[],
  unit?: string
}

const sourceData: SourceDataType[] = [
  {
    type: 'select',
    label: 'Тип СК',
    selectValues: [
      { value: 'jack', label: 'Стандартная' },
      { value: 'disabled', label: 'Скважина 2', disabled: true },
    ]
  },
  {
    type: 'input',
    label: 'Н ВДП',
    unit: 'м'
  },
  {
    type: 'input',
    label: 'Н насоса',
    unit: 'м'
  },
  {
    type: 'input',
    label: 'Коэффициент заполнения',
    unit: '%'
  },
  {
    type: 'input',
    label: 'КПД СК',
    unit: '%'
  },
  {
    type: 'select',
    label: 'Диаметр насоса',
    selectValues: [
      { value: 'jack', label: '2"' },
      { value: 'disabled', label: 'Скважина 2', disabled: true },
    ]
  },
  {
    type: 'input',
    label: 'Длина хода ПШ',
    unit: 'м'
  },
  {
    type: 'input',
    label: 'Забойная температура',
    unit: 'С'
  },
  {
    type: 'input',
    label: 'Устьевая температура',
    unit: 'С'
  },
  {
    type: 'input',
    label: 'Устьевое давление',
    unit: 'бар'
  },
]

const results: ResultType[] = [
  { label: 'Мощность на трение', value: 3.6, unit: 'кВ' },
  { label: 'Мощность на шток', value: 6.4, unit: 'кВ' },
  { label: 'Заводская мощность', value: 10.3, unit: 'кВ' },
  { label: 'Работа насоса', value: 54413, unit: 'Н' },
  { label: 'Работа штока', value: 125533, unit: 'Н' },
  { label: 'Нагрузка на верх штока', value: 62.3, unit: '%' },
  { label: 'Коэффициент объема', value: 77.3, unit: '%' },
  { label: 'Фактический дебит', value: 34.3, unit: 'м3/сут' },
  { label: 'Факт. число качаний', value: 13.076, unit: 'кач/мин' },
  { label: 'Нагрузка на шток (верх)', value: 87522.6, unit: 'Н' },
  { label: 'Нагрузка на шток (низ)', value: 28305.5, unit: 'Н' },
  { label: 'Длина хода насоса', value: 1.1606, unit: 'м' },
  { label: 'Статическое растяжение', value: 0.113, unit: 'м' },
  { label: 'Избыт. ход плунжера', value: 0.04933, unit: 'м' },
  { label: 'Макс. крут. момент', value: 29350, unit: 'Н м' },
  { label: 'Эффективность подъема', value: 83.76, unit: '%' },
  { label: 'Нагрузка от жидкости', value: 14050, unit: 'м' },
  { label: 'Нагрузка штока в жидкости', value: 49723, unit: 'м' },
]

export const SelectionSHGN = () => {
  const [selectedOption, setSelectedOption] = React.useState<string>('swings');

  const handleOptionChange = (e: any) => {
    console.log(e.target.value);

    setSelectedOption(e.target.value);
  };

  return (
    <>
      <Space size={50}>
        <Space size={10}>
          <Typography>Скважина:</Typography>
          <Select
            defaultValue="jack"
            style={{ width: 200 }}
            options={[
              { value: 'option1', label: 'Скважина 1' },
              { value: 'option2', label: 'Скважина 2', disabled: true },
            ]}
          />
        </Space>
        <Space size={10}>
          <Typography>Причина смены ГНО:</Typography>
          <Select
            defaultValue="jack"
            style={{ width: 200 }}
            options={[
              { value: 'jack', label: 'Скважина после ГРП без ГДИС' },
              { value: 'disabled', label: 'Скважина 2', disabled: true },
            ]}
          />
        </Space>
      </Space>
      <Divider />
      <Row>
        <Col span={12}>
          <Form
            labelCol={{ span: 15 }}
            onFinish={calculateResult}
            style={{ width: 500 }}
          >
            <Typography.Title level={3} style={{ marginBottom: 20 }}>
              Настройка расчёта
            </Typography.Title>
            <Radio.Group defaultValue={'swings'} style={{ width: 500 }}>
              <Form.Item labelAlign="left" style={{ margin: '10px 0' }}>
                <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Radio value={'swings'} onChange={handleOptionChange}>Число качаний</Radio>
                  <Input addonAfter="кач/мин" disabled={selectedOption !== 'swings'} style={{ width: 200 }} />
                </Space>
              </Form.Item>
              <Form.Item style={{ margin: '10px 0' }}>
                <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Radio value={'debit'} onChange={handleOptionChange}>Дебит</Radio>
                  <Input addonAfter="кач/мин" disabled={selectedOption !== 'debit'} style={{ width: 200 }} />
                </Space>
              </Form.Item>
            </Radio.Group>
            <Form.Item label='Выбор насоса' labelAlign="left" style={{ margin: '10px 0' }}>
              <Select
                defaultValue={'jack'}
                style={{ width: 200 }}
                options={[
                  { value: 'jack', label: 'LUFKIN C-320-246-74' },
                  { value: 'disabled', label: 'Скважина 2', disabled: true },
                ]} />
            </Form.Item>
            <Form.Item label='Выбор штанги' labelAlign="left" style={{ margin: '10px 0' }}>
              <Select
                defaultValue={'jack'}
                style={{ width: 200 }}
                options={[
                  { value: 'jack', label: 'ROD 99/05' },
                  { value: 'disabled', label: 'Скважина 2', disabled: true },
                ]} />
            </Form.Item>
            <Typography.Title level={3} style={{ marginBottom: 20 }}>
              Исходные данные для дизайна
            </Typography.Title>
            {sourceData.map((formItem: SourceDataType) => (
              <Form.Item label={formItem.label} labelAlign="left" style={{ margin: '10px 0' }} key={formItem.label}>
                {formItem.type === 'select'
                ? <Select options={formItem.selectValues} style={{ width: 200 }} />
                : <Input addonAfter={formItem.unit} type='number' style={{ width: 200 }} />}
              </Form.Item>
            ))}
          </Form>
        </Col>
        <Col span={12}>
          <Form labelCol={{ span: 16 }} style={{ width: 500 }}>
            <Typography.Title level={3} style={{ marginBottom: 20 }}>
              Результаты расчёта дизайна
            </Typography.Title>
            {results.length
              ? results.map((result: ResultType) => (
                <Form.Item label={result.label} labelAlign="left" style={{ margin: '5px' }} key={result.label}>
                  <Input value={result.value} addonAfter={result.unit} size='small' />
                </Form.Item>
              ))
              : <Empty description='Нет данных' />}
          </Form>
        </Col>
      </Row>
    </>
  )
}