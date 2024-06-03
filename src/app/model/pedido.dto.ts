export class PedidoDto {
  precioTotal: number;
  fecha: Date = new Date();
  fechaEntrega: Date = new Date();
  estado: boolean = false;
  metodoPago: string;
  detalles: PedidoDetalleDTO[] = [];
  localId: number;
  clienteId: number;
  constructor(
    precioTotal: number,
    metodoPago: string,
    detalles: PedidoDetalleDTO[],
    localId: number,
    clienteId: number
  ) {
    this.precioTotal = precioTotal;
    this.metodoPago = metodoPago;
    this.detalles = detalles;
    this.localId = localId;
    this.clienteId = clienteId;
  }
}

export class PedidoDetalleDTO {
  productoId: number;
  cantidad: number;
  precio: number;
  constructor(productoId: number, cantidad: number, precio: number) {
    this.productoId = productoId;
    this.cantidad = cantidad;
    this.precio = precio;
  }
}
