export default class Dirrecion{
    constructor(calle, numeroExterior, numeroInterior, colonia, codigoPostal, ciudad, municipio)
    {
        this.calle = calle
        this.numeroExterior = numeroExterior
        this.numeroInterior = numeroInterior
        this.colonia = colonia
        this.codigoPostal = codigoPostal
        this.ciudad = ciudad
        this.municipio = municipio
    }

    getFormatoCorto()
    {
        return (`${this.calle} ${this.numeroExterior}`)
    }

    getFormatoExtendido()
    {
        return(`${this.ciudad}, ${this.municipio}, ${this.colonia}, ${this.calle}, Numero exterior: ${this.numeroExterior}, Numero interior: ${this.numeroInterior}, Codigo Postal: ${this.codigoPostal}`)
    }
}