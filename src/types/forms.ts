import { PurchaseType } from "./global";

export interface FormValue<ValueType> {
    id: keyof PurchaseType;
    value: ValueType;
    valid: boolean;
    message: string;
    touched: boolean;
    loading?: boolean;
}