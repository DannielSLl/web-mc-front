import { ProductoDto } from './product.dto';

export interface LocalProducto{
  id:       number;
  cantidad: number;
  producto: ProductoDto;
}