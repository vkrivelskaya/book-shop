import { Payment } from "src/app/shared/constants/payment";
import { CartItem } from "./cart-item";

export interface Order {
    items: CartItem[];
    sum: number,
    quantity: number,
    address: string,
    payment: Payment,
    comments: string,
}