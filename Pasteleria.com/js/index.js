let precio = 0
let carro = 0

function mostrarPrecio (id){
    switch(id){
        
        case 1:
            precio = 5500
            alert('La torta cuesta $' + precio)
            break
        case 2: 
            precio = 4500
            alert('El pastel cuesta $' + precio)
            break
        case 3:
            precio = 4800
            alert('Las tartas cuesta $' + precio)
            break
        case 4:
            precio = 800
            alert('Las medialunas cuestan $' + precio)
            break 
        case 5:
            precio = 900
            alert('Las donas cuestan $' + precio)
            break    
        default:
            alert('🤔No entendemos tu consulta')   
    }
}


function consultarPrecio(){

    let preguntar = true

    while(preguntar){
        let idPostre = prompt('Ingresa el codigo numerico de el postre a consultar: ')

        if (idPostre != "" && idPostre !== null) {
            mostrarPrecio(parseInt(idPostre))
            if(precio != 0 ){
                carro = agregarCarro(precio)
            }
        } else {
            console.warn("Ingresa un código válido.")
        }

        preguntar = confirm("Deseas conocer el precio de otra postre?")
        precio = 0
    }
}

function agregarCarro(precio){
    let carrito = carro

    let preguntar = confirm('Deseas agregar este producto al carro?')
    
    if(preguntar){
        carrito = carrito + precio
        console.log("tienes en tu carro un total de : $" + carrito)
    }

    return carrito

}
