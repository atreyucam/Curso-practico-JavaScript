function descuentoPrecio(precio, descuento){
    return (precio * (100 - descuento)) / 100;
}
function descuentoEspecial(precio, descuento, cupon){
    return (precio * (100 - descuento - cupon)) / 100;
}
var cupones = [15, 25, 50];

function cuponDes(cuponiInput, precio){
    if(cuponiInput === "basico"){
        return descuentoPrecio(precio, cupones[0]);
    }
    else if (cuponiInput === "medio") {
        return descuentoPrecio(precio, cupones[1]);
    }
    else if (cuponiInput === "alto") {
        return descuentoPrecio(precio, cupones[2]);
    }
}

function calcularDescuento(){
    const input = document.getElementById("inputPrecioProducto");
    const precio = input.value;
    const inputDes = document.getElementById("inputDescuento");
    const descuento = inputDes.value;
    const total = document.getElementById("outputTotal");

    const precioFinal = descuentoPrecio(precio, descuento);
    total.innerText = "El precio total es: $" + precioFinal;    
}

function calcularDescuentoCupon(){
    const input = document.getElementById("inputPrecioProducto");
    const precio = input.value;
    const inputDes = document.getElementById("inputDescuento");
    const descuento = inputDes.value;
    const cuponesx = document.getElementById("inputCupon");
    const cuponEspecial = cuponesx.value;
    const total = document.getElementById("outputTotal");

    if(cuponEspecial == "basico"){
        let valor = descuentoEspecial(precio, descuento, cupones[0]);
        total.innerText = "El precio final es: $" + valor;
    }
    else if(cuponEspecial == "medio"){
        let valor = descuentoEspecial(precio, descuento, cupones[1]);
        total.innerText = "El precio final es: $" + valor;
    }
    else if(cuponEspecial == "alto"){
        let valor = descuentoEspecial(precio, descuento, cupones[2]);
        total.innerText = "El precio final es: $" + valor;
    }
    else{
        total.innerText = "Cupon no encontrado";
    }
}