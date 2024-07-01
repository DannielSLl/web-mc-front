export class CreateProductDto {
  nombre: string;
  description: string;
  precio: number;
  calorias: number;
  localId: number;
  categoriaId: number;
  img: string;

  constructor(
    nombre: string,
    description: string,
    precio: number,
    calorias: number,
    localId: number,
    categoriaId: number,
    img: string
  ) {
    this.nombre = nombre;
    this.description = description;
    this.precio = precio;
    this.calorias = calorias;
    this.localId = localId;
    this.categoriaId = categoriaId;
    this.img = img;
  }
}
