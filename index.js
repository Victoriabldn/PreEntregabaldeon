 //Clases

class Producto {
    constructor(variedad, nombre, precio, disponible) {
        this.variedad = variedad
        this.nombre = nombre
        this.precio = precio
        this.disponible = disponible
    }

}

//variables
const producto1 = new Producto('Malbec', 'Vino Malbec', 2300, 76)
const producto2 = new Producto('Cabernet Franc', 'Vino Cabernet Franc', 1800, 64)
const producto3 = new Producto('Torrontes', 'Vino Torrontes', 1650, 42)
console.log(producto1)
console.log(producto2)
console.log(producto3)


//cartel para comprar producto en stock

    const producto = prompt('qué producto deseas adquirir (escriba tal cual el nombre) -Vino Malbec -Cabernet Franc -Torrontes  ').toLocaleLowerCase()

    //compra de vino
    
    if (producto === 'malbec') {
        const vmalbec = parseInt(prompt('Cuantas botellas de ' + producto1.nombre + ' desea ?'))
        if (producto1.disponible < vmalbec) {
            alert('No Disponible. Por favor selecciona una cantidad menor')
        } else {
            if (vmalbec >= 1 && vmalbec <= producto1.disponible) {
                console.log('la orden consta de ' +vmalbec, producto1.nombre)
                alert('Has agregado una cantidad de  ' + vmalbec + ' botellas ' + producto1.nombre)
                aPagar = vmalbec* (parseInt(producto1.precio))
                alert ('Tu orden de '+vmalbec+' '+producto1.nombre+ ' tiene un valor de $'+aPagar)
                pagar()
            } else {
                alert('Indica una cantidad correcta de ' + producto1.nombre)
            }
        }
    } else if (producto === 'cabernet franc') {
        const Cfranc = parseInt(prompt('Cuantas botellas de ' + producto2.nombre + ' desea ?'))
        if (producto2.disponible < Cfranc) {
            alert('No Disponible. Por favor selecciona una cantidad menor')
        } else {
            if (Cfranc >= 1 && Cfranc <= producto2.disponible) {
                console.log('la orden consta de ' +Cfranc, producto2.nombre)
                alert('Has agregado a tu compra la cantidad de ' + Cfranc + ' botellas ' + producto2.nombre)
                aPagar = Cfranc * (parseInt(producto2.precio))
                alert ('Tu orden de '+Cfranc+' '+producto2.nombre+ ' tiene un valor de $'+aPagar)
                pagar()
            } else {
                alert('Indica una cantidad correcta de ' + producto2.nombre)
            }
        }
    } else if (producto === 'torrontes') {
        const vtorrontes = parseInt(prompt('Cuántas botellas de ' + producto3.nombre + ' desea ?'))
        if (producto3.disponible < vtorrontes) {
            alert('No Disponible. Por favor selecciona una cantidad menor')
        } else {
            if (vtorrontes >= 1 && vtorrontes <= producto3.disponible) {
                console.log('la orden consta de ' +vtorrontes, producto3.nombre)
                alert('Has agregado a tu orden la cantidad de ' + vtorrontes + ' botellas ' + producto3.nombre)
                aPagar = vtorrontes * (parseInt(producto3.precio))
                alert ('Tu orden de '+vtorrontes+' '+producto3.nombre+ ' tiene un valor de $'+aPagar)
                pagar()
                
            } else {
                alert('Indica una cantidad correcta de ' + producto3.nombre)
            }
        }
    } else {
        alert('Elige un Producto válido')
    }
    
    // medios pago
function pagar(){
    const medioDePago = prompt('Seleccione numero de medio de pago: 1- para pago en el local y retiro 2- para pago en línea con tarjeta de débito o crédito con envio').toLowerCase()
    if (medioDePago ==='1'){
        alert('Su pedido ya ha sido tomado, puedes retirarlo en las proximas 72hs, muchas gracias!') 
    } else if (medioDePago ==='2'){ 
        alert ('Gracias por su compra su pedido sera enviado en los proximos 5 dias habiles')
    }
}

