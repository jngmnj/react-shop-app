import { IProduct } from "../products/products.types";

export interface IOrder {
  id: string;
  userId: string;
  totalPrice: number;
  products: IProduct[];
}
