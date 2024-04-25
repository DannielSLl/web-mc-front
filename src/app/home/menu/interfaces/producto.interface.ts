export interface IProducto{
    id: number;
    nombre: string;
    descripcion:  string;
    precio:number;
    calorias:number;
    img: string;
    categoria:ICategoria;
}

export interface ICategoria{
    id:number;
    nombre: string;
}
