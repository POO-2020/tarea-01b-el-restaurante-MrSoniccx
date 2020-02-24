export default class Precio{
    constructor(valor)
    {
        this.valor = valor
        
        
    }

    getPrecio(){
        const formatterDolar = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          })
        return (`${formatterDolar.format(this.valor)}`)
    }
}