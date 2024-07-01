export class Local {
  id: number;
  nombre: string;
  direccion: string;
  ciudad: string;

  constructor(id: number, nombre: string, direccion: string, ciudad: string) {
    (this.id = id),
      (this.nombre = nombre),
      (this.direccion = direccion),
      (this.ciudad = ciudad);
  }
}
