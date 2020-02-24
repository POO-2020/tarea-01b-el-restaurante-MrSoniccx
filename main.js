import Precio from "./precio.js";
import Producto from "./producto.js";
import ElementoPedido from "./elementoPedido.js";
import Dirrecion from "./direccion.js";

class Main{
    constructor(){
        this.precio = new Precio(75.20)
        this.producto = new Producto("Pizza grande", this.precio)
        this.elementoPedido = new ElementoPedido(this.producto, 2)
        this.direccion = new Dirrecion("Manzanas", 524, 12, "Garbantez", 255781, "Colima", "Colima")
    }
    
    testPrecio()
    { console.log(this.precio.getPrecio())}
    testElementoProducto()
    { console.log(this.elementoPedido.getDescripcion())}
    testDireccion()
    { console.log(this.direccion.getFormatoExtendido())
      console.log(this.direccion.getFormatoCorto())}
}

console.log("hola")
let tester = new Main()
tester.testPrecio();
tester.testElementoProducto();
tester.testDireccion();