import { CategoriaDto } from "./categoria.dto";

export class ProductoDto {
  id: number;
  nombre: string;
  description: string;
  precio: number;
  calorias: number;
  img: string;
  categoria: CategoriaDto;

  constructor(
    id: number,
    nombre: string,
    description: string,
    precio: number,
    calorias: number,
    img: string,
    categoria: CategoriaDto
  ) {
    {
      this.id = id;
      this.nombre = nombre;
      this.calorias = calorias;
      this.description = description;
      this.precio = precio;
      this.img = img;
      this.categoria = categoria;
    }
  }
}
