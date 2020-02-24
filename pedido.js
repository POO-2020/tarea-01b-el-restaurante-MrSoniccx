import Precio from "./precio.js";

export default class Pedido {
    constructor(fecha, hora, cliente) {
        this.fecha = fecha;
        this.hora = hora;
        this.cliente = cliente;
        this.elementosPedidos = [];
    }
    agregarElemento(elemento) {
        this.elementosPedidos.push(elemento);
    }
    listarElementos() {
        console.log("~ E L E M E N T O S ~");
        this.elementosPedidos.forEach((elem, i) => {
            console.log(`(${i + 1}) ~ ~ ~ ${elem.getDescripcion()}`);
        });
    }
    getCostoTotal() {
        let total = 0
        this.elementosPedidos.forEach((elem) => {
            total = (total + (elem.producto.precio.valor * elem.cantidad));
        });
        total = new Precio(total);
        return total.getPrecio();
    }
    getProductos() {
        let productos = 0;
        this.elementosPedidos.forEach((elem, i) => {
            productos = productos + elem.cantidad;
        });
        return productos;
    }
    getNumeroElementos() {
        let numeroDeElementos = 0;
        this.elementosPedidos.forEach((elem, i) => {
            numeroDeElementos = numeroDeElementos + 1;
        });
        return numeroDeElementos;
    }
    getResumen() {
        return `${this.fecha.getFecha()} ${this.hora.getFormato12()} - ${this.getNumeroElementos()} elementos con ${this.getProductos()} productos - total ${this.getCostoTotal()}`;
    }
}
