export interface IProducto{
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    calorias: number;
    categoria: {
        id:number;
        nombre: string;
    };
    img: string;
}