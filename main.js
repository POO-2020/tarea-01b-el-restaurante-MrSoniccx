import Precio from "./precio.js";
import Producto from "./producto.js";
import ElementoPedido from "./elementoPedido.js";
import Dirrecion from "./direccion.js";
import Cliente from "./cliente.js";
import Pedido from "./pedido.js";
import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"

class Main{
    constructor(){
        this.precio = new Precio(75.20)
        this.producto = new Producto("Pizza grande", this.precio)
        this.producto2 = new Producto("Salchipapas", new Precio(20.50))
        this.elementoPedido = new ElementoPedido(this.producto, 2)
        this.elementoPedido2 = new ElementoPedido(this.producto2, 1)
        this.direccion = new Dirrecion("Manzanas", 524, 12, "Garbantez", 255781, "Colima", "Colima")
        this.cliente = new Cliente("Pepe Pepa Peparin", this.direccion, 3125486691)
        this.pedido = new Pedido(new Fecha(new Date(2018,5,25)), new Tiempo(11,23,"am"), this.cliente)
    }
    
    testPrecio()
    { console.log(this.precio.getPrecio())}

    testElementoProducto()
    { console.log(this.elementoPedido.getDescripcion())}

    testDireccion()
    { console.log(this.direccion.getFormatoExtendido())
      console.log(this.direccion.getFormatoCorto())}

    testCliente()
    { console.log(this.cliente.getPerfil())}

    testPedido()
    {
        this.pedido.agregarElemento(this.elementoPedido)
        this.pedido.agregarElemento(this.elementoPedido2)
        this.pedido.agregarElemento(this.elementoPedido2)
        console.log(this.pedido.getResumen())
        console.log(this.pedido.getNumeroElementos())
        console.log(this.pedido.getProductos())
        console.log(this.pedido.getCostoTotal())
        this.pedido.listarElementos()
        
        
    }
}

let tester = new Main()
tester.testPrecio();
tester.testElementoProducto();
tester.testDireccion();
tester.testCliente();
tester.testPedido();