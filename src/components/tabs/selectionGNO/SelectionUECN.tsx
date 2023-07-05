import React from 'react'
import { Typography, Select, Space, Divider, Form, Input, Empty, Col, Row } from 'antd';

const calculateResult = (values: any) => {
    console.log('Success:', values);
};

type SourceDataType = {
    type: string,
    label: string,
    selectValues?: { value: string, label: string, disabled?: boolean }[],
    unit?: string
}

type ResultType = {
    label: string,
    value: number,
    unit: string
}

const sourceData: SourceDataType[] = [
    {
        type: 'input',
        label: 'Частота насоса',
        unit: 'ГЦ'
    },
    {
        type: 'input',
        label: 'Макс. диаметр насоса',
        unit: 'м'
    },
    {
        type: 'input',
        label: 'Длина кабеля',
        unit: 'м'
    },
    {
        type: 'input',
        label: 'Коэффициент операции',
        unit: '%'
    },
    {
        type: 'input',
        label: 'Целевая производительность',
        unit: 'м3/сут'
    },
    {
        type: 'input',
        label: 'Пластовое давление',
        unit: 'бар'
    },
    {
        type: 'input',
        label: 'Обводненность',
        unit: '%'
    },
    {
        type: 'input',
        label: 'Общий ГФ',
        unit: 'м3/м3'
    },
    {
        type: 'input',
        label: 'Устьевое давление',
        unit: 'бар'
    },
    {
        type: 'input',
        label: 'Запас по мощности двигателя',
        unit: '%'
    },
    {
        type: 'input',
        label: 'Коэффициент износа насоса',
        unit: 'д.ед.'
    },
    {
        type: 'select',
        label: 'Корреляция МФП',
        selectValues: [
            { value: 'jack', label: 'Beggs and Brill' },
            { value: 'disabled', label: 'Скважина 2', disabled: true },
        ]
    },
]

const equipment: SourceDataType[] = [
    {
        type: 'select',
        label: 'Насос',
        selectValues: [
            { value: '2', label: 'CENTRILIFT KC11000 0.13275 m' }
        ]
    },
    {
        type: 'select',
        label: 'ПЭД',
        selectValues: [
            { value: '2', label: 'Centrilift 544 375HP 2105V 105A' }
        ]
    },
    {
        type: 'select',
        label: 'Кабель',
        selectValues: [
            { value: '2', label: '#1 Cooper 0.85302 (Volts/1000m)' }
        ]
    },
]

const pumpDesignMode: ResultType[] = [
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

const results: ResultType[] = [
    { label: 'Число ступеней', value: 3.6, unit: '' },
    { label: 'Требуемая мощность', value: 6.4, unit: 'кВ' },
    { label: 'КПД', value: 10.3, unit: '%' },
    { label: 'Температура на выходе', value: 54413, unit: 'С' },
    { label: 'Сила тока', value: 125533, unit: 'А' },
    { label: 'КПД двигателя', value: 62.3, unit: '%' },
    { label: 'Генерируемая мощность двигателя', value: 77.3, unit: 'кВ' },
    { label: 'Частота вращения двигателя', value: 13.076, unit: 'об/мин' },
    { label: 'Падение напряжения на кабеле', value: 87522.6, unit: 'В' },
    { label: 'Требуемое напряжение на поверхности', value: 28305.5, unit: 'В' },
    { label: 'Крутящий момент на валу', value: 1.1606, unit: 'Н м' },
    { label: 'Коэффициент мощности', value: 0.113, unit: 'д.ед.' },
]

export const SelectionUECN = () => {
    return (
        <>
            <Space size={50}>
                <Space size={10}>
                    <Typography>Скважина:</Typography>
                    <Select
                        defaultValue="jack"
                        style={{ width: 200 }}
                        options={[
                            { value: 'jack', label: 'Скважина 1' },
                            { value: 'disabled', label: 'Скважина 2', disabled: true },
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
                        <Typography.Title level={3} style={{ margin: '0 0 20px 0' }}>
                            Настройка расчёта
                        </Typography.Title>
                        <Typography.Title level={5} style={{ marginBottom: 20 }}>
                            Исходные данные:
                        </Typography.Title>
                        {sourceData.map((formItem: SourceDataType) => (
                            <Form.Item label={formItem.label} labelAlign="left" style={{ margin: '10px 0' }} key={formItem.label}>
                                {formItem.type === 'select'
                                ? <Select options={formItem.selectValues} style={{ width: 200 }} />
                                : <Input addonAfter={formItem.unit} type='number' style={{ width: 200 }} />}
                            </Form.Item>
                        ))}
                        <Typography.Title level={5} style={{ marginBottom: 20 }}>
                            Оборудование:
                        </Typography.Title>
                        {equipment.map((formItem: SourceDataType) => (
                            <Form.Item label={formItem.label} labelAlign="left" style={{ margin: '10px 0' }} key={formItem.label}>
                                {formItem.type === 'select'
                                ? <Select options={formItem.selectValues} style={{ width: 200 }} />
                                : <Input addonAfter={formItem.unit} type='number' style={{ width: 200 }} />}
                            </Form.Item>
                        ))}
                    </Form>
                </Col>
                <Col span={12}>
                    <Typography.Title level={3} style={{ margin: '0 0 20px 0' }}>
                        Результаты расчёта дизайна
                    </Typography.Title>
                    <Row gutter={[32, 0]}>
                        <Col span={12}>
                            <Typography.Title level={5} style={{ margin: '0 0 20px 0' }}>
                                Рачсётный режим работы насоса:
                            </Typography.Title>
                            {pumpDesignMode.length
                                ? pumpDesignMode.map((result: ResultType) => (
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }} key={result.label}>
                                        <Typography>{result.label}</Typography>
                                        <Input value={result.value} addonAfter={result.unit} size='small' style={{ width: '30%', marginLeft: 'auto' }} />
                                    </div>
                                ))
                                : <Empty description='Нет данных' />}
                        </Col>
                        <Col span={12}>
                            <Typography.Title level={5} style={{ margin: '0 0 20px 0' }}>
                                Результаты:
                            </Typography.Title>
                            {results.length
                                ? results.map((result: ResultType) => (
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }} key={result.label}>
                                        <Typography>{result.label}</Typography>
                                        <Input value={result.value} addonAfter={result.unit} size='small' style={{ width: '30%', marginLeft: 'auto' }} />
                                    </div>
                                ))
                                : <Empty description='Нет данных' />}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}