export class ProductoDto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  calorias: number;
  img: string;
  categoria: number;

  constructor(
    id: number,
    nombre: string,
    descripcion: string,
    precio: number,
    calorias: number,
    img: string,
    categoria: number
  ) {
    {
      this.id = id;
      this.nombre = nombre;
      this.calorias = calorias;
      this.descripcion = descripcion;
      this.precio = precio;
      this.img = img;
      this.categoria = categoria;
    }
  }
}
