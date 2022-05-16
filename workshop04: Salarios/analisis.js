const salariosEcuador = Ecuador.map(
    function(persona){
        return persona.salary;
    }
);

const salarioOrdenado = salariosEcuador.sort(
    function(a, b){
        return a - b;
    }
);

function calcularMediana(){
    if (this.salarioOrdenado.length %2 == 0) {
        const mitad = parseInt(this.salarioOrdenado.length / 2);
        const value1 = this.salarioOrdenado[mitad - 1];
        const value2 = this.salarioOrdenado[mitad];
        const respuesta = (value1 + value2) / 2;
        console.log(respuesta);
    }
    else{
        const mitad = parseInt(this.salarioOrdenado.length / 2);
        console.log(this.salarioOrdenado[mitad]);
    }
}