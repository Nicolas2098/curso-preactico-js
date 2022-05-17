var descuentos =[
    {nombre: "basico", descuento: "10"},
    {nombre: "preferencial", descuento: "30"},
    {nombre: "vip", descuento: "50"}];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
    return precioConDescuento;
  }
  
  function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value.toLowerCase();
  
    let descuento;

    switch (discountValue){
        case descuentos[0].nombre:
            descuento = descuentos[0].descuento;
        break;

        case descuentos[1].nombre:
            descuento = descuentos[1].descuento;
        break;

        case descuentos[2].nombre:
            descuento = descuentos[2].descuento;
        break;

        default:
            descuento = 0;
    }
    
    const resultP = document.getElementById("ResultP");

    if(descuento != 0 && !isNaN(descuento)){
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }else{
        resultP.innerText = "El precio con descuento son: $" + priceValue + " (no se le aplico descuento al producto.)";
    }
  }