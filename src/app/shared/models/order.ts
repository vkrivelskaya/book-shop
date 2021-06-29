import { CartItem } from 'src/app/core/models/cart-item';

export interface OrderModel {
  items: CartItem[];
  sum: number;
  quantity: number;
  address: string;
  payment: string;
  comments?: string;
  id?: number;
}
