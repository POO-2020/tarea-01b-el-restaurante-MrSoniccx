export default class Restaurante{

    constructor(nombre, telefono, direccion)
    {
        this.nombre = nombre
        this.telefono = telefono
        this.direccion = direccion
        this.productos = []
        this.pedidos = []
    }

    registrarProducto(producto){
        this.productos.push(producto)
    }
    registrarPedido(pedido){
        this.pedidos.push(pedido)
    }

    listarProductos(){
        console.log("~ P R O D U C T O S ~")
        this.productos.forEach( (pro) => {
            console.log(pro.getDescripcion())
        })
    }
    listarPedidos(){
        console.log("~ P E D I D O S ~")
        this.pedidos.forEach( (ped, i) => {
            console.log(`(${i+1}) ~ ${ped.getResumen()}`)
        })
    }
}