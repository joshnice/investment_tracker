export interface FormValue<ValueType> {
    value: ValueType;
    valid: boolean;
    message: string;
    touched: boolean;
}