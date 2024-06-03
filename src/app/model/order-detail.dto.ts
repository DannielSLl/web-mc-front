export class OrderDetailDto {
  id!: number; //
  nameClient!: string; //
  lastnameClient!: string; //
  phone!: string; //
  dateOrder!: string; //
  orderDeliveryDate!: string; //
  products!: Product[];
  total!: number; //
  status!: string; // pendiendte preparacion, listo, entregado
}
export interface Product {
  name: string;
  price: number;
  quantity: number;
  totalPartial: number;
}
