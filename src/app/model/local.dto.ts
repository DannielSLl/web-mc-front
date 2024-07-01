export class Local {
  id: number;
  nombre: string;
  ciudad: string;
  direccion: string;

  constructor(id: number, nombre: string, ciudad: string, direccion: string) {
    this.id = id;
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.direccion = direccion;
  }
}
