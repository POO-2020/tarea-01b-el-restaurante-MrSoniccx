import Precio from "./precio.js";
import Producto from "./producto.js";
import ElementoPedido from "./elementoPedido.js";

class Main{
    constructor(){
        this.precio = new Precio(75.20)
        this.producto = new Producto("Pizza grande", this.precio)
        this.elementoPedido = new ElementoPedido(this.producto, 2)
    }
    
    testPrecio()
    { console.log(this.precio.getPrecio())}
    testElementoProducto()
    { console.log(this.elementoPedido.getDescripcion())}
}

console.log("hola")
let tester = new Main()
tester.testPrecio();
tester.testElementoProducto();