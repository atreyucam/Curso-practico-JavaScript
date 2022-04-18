//Funciones de figuras geometricas
function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrado(lado){
    return lado * lado;
}
function perimetroTriangulo(lado1,lado2, base){
    return lado1 + lado2  + base;
}
function alturaTriangulo(lado, base){
    return Math.sqrt(Math.pow(lado,2) - ((Math.pow(base,2)) / 4));
}
function alturaTrianguloEscaleno(lado1, lado2, base){
    var semiP = (lado1 + lado2 + base) / 2; //Semiperimetro
    var altura = (2/lado1) * Math.sqrt(semiP * (semiP - lado1) * (semiP - lado2) * (semiP - base));
    return Number(altura.toFixed(3));
}
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
function perimetroCirculo(radio){
    return Math.PI * 2 * radio;
}
function areaCirculo(radio){
    return Math.PI * Math.pow(radio,2);
}
// -------------------------------------
//Conexcion con HTML y js
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    alert("El perimetro es: " + perimetroCuadrado(value)); 
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    alert("El area es: " + areaCuadrado(value));
}
function calcularPerimetroTriangulo(){
    const inputA = document.getElementById("inputValorA");
    const ladoA = Number(inputA.value);
    const inputB = document.getElementById("inputValorB");
    const ladoB = Number(inputB.value);
    const inputC = document.getElementById("inputValorC");
    const base = Number(inputC.value);

    if ((ladoA === ladoB) && ( ladoA !== base)) {
        alert("El perimetro del triangulo isoceles es: " + perimetroTriangulo(ladoA,ladoB, base));
    }
    else if((ladoA === ladoB) && ( ladoA === base)){
        alert("El perimetro del triangulo equilatero es: " + perimetroTriangulo(ladoA,ladoB, base));
    }
    else{
        alert("El perimetro del triangulo escaleno es: " + perimetroTriangulo(ladoA,ladoB, base));

    }
}
function calcularAreaTriangulo(){
    const inputA = document.getElementById("inputValorA");
    const ladoA = inputA.value;
    const inputB = document.getElementById("inputValorB");
    const ladoB = inputB.value;
    const inputC = document.getElementById("inputValorC");
    const base = inputC.value;

    if ((ladoA === ladoB) && ( ladoA !== base)) {
        const area = areaTriangulo(base, alturaTriangulo(ladoA, base));
        alert("El area del triangulo isoceles es: " + area.toFixed(3));
    }
    else if((ladoA === ladoB) && ( ladoA === base)){
        const area = areaTriangulo(base, alturaTriangulo(ladoA, base));
        alert("El area del triangulo equilatero es: " + area.toFixed(3));
    }
    else{
        // TODO: revisar el resultado.
        const areaE = areaTriangulo(base, alturaTrianguloEscaleno(ladoA, ladoB, base));
        alert("El area del triangulo escaleno es: " + areaE.toFixed(3));
    }
}
function calcularPerimetroCircunferencia(){
    const input = document.getElementById("inputRadio");
    const radio = input.value;
    alert("El perimetro de la circunferencia es: " + perimetroCirculo(radio).toFixed(3));
}
function calcularAreaCircunferencia(){
    const input = document.getElementById("inputRadio");
    const radio = input.value;
    alert("El area de la circunferencia es: " + areaCirculo(radio).toFixed(3));
}