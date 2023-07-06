type SourceDataType = {
    type: string,
    label: string,
    selectValues?: { value: string, label: string, disabled?: boolean }[],
    unit?: string,
    radioLabel?: string,
    radioValue?: string,
}

type ResultType = {
    label: string,
    value: number,
    unit: string
}