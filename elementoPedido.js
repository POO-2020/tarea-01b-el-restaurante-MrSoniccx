export default class ElementoPedido{

    constructor(producto, cantidad)
    {
        this.producto = producto
        this.cantidad = cantidad
    }

    getDescripcion(){
        return(`${this.cantidad} X ${this.producto.getDescripcion()}`)
    }
}