function calcularAltura(){
    let lado_igual = document.getElementById("lados_iguales").value;
    //let lado_igual2 = document.getElementById("lados_iguales").value;
    let lado3 = document.getElementById("lados_distinto").value;

    console.log(lado_igual);
    console.log(lado3);

    if(isNaN(lado_igual) || isNaN(lado3) || lado_igual == 0 || lado3 == 0){
        alert('Los lados del tirangulo deben ser mayores a 0.');
    }else{
        let resultado = Math.sqrt(Math.pow(lado_igual,2) - Math.pow(lado3/2,2)); 
        alert("La altura del triangulo es: " + resultado );
    }

}