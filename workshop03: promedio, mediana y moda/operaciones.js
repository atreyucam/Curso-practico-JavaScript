class C_Operaciones{
    listaNumero =[1,2,3,1,2,3,3,3,1,3,3];
    promedio;
    mediana;
    moda;

    constructor(){}

    setPromedio(valor){ this.promedio = valor; }
    setMediana(valor){ this.mediana = valor; }
    setModa(valor){ this.moda = valor; }

    getListaNumero(){ return this.listaNumero; }
    getPromedio(){ return this.promedio; }
    getMediana(){ return this.mediana; }
    getModa(){ return this.moda; }

    ordenarLista(){
        this.getListaNumero().sort(function(a,b){
            return a - b;
        });
    }

    calcularPromedio(){
        this.ordenarLista();
        let valor = 0;
        // for(let i = 0; i < this.listaNumero.length; i++){
        //     valor = valor + this.listaNumero[i];
        // }
        valor = this.getListaNumero().reduce(
            function(valorAcumulado = 0, nuevoItem){
                return valorAcumulado + nuevoItem;
            }
        );
        valor = valor / this.getListaNumero().length;
        this.setPromedio(valor);
        console.log(this.getPromedio());
    }

    calcularMediana(){
        this.ordenarLista();
        if (this.getListaNumero().length %2 == 0) {
            const mitad = parseInt(this.getListaNumero().length / 2);
            const value1 = this.getListaNumero()[mitad - 1];
            const value2 = this.getListaNumero()[mitad];
            const respuesta = (value1 + value2) / 2;
            this.setMediana(respuesta);
            console.log(this.getMediana());
        }
        else{
            const mitad = parseInt(this.getListaNumero().length / 2);
            console.log(this.getListaNumero()[mitad]);
        }
    }

    calcularModa(){
        //Primero contamos cuantos elementos se repiten y los guardamos en un array tipo object.
        const lista1count = {};
        this.getListaNumero().map(
            function(item){
                if(lista1count[item]){
                    lista1count[item] += 1;
                }
                else{
                    lista1count[item] = 1;
                }
            }
        );
        //Segundo: convertimos otra vez en array y ordenamos con sort.
        const listaArray = Object.entries(lista1count).sort(
            function(a, b){
                return a[1] - b[1];
            }
        );
        //Tercero: Guardamos la ultima posiscion que tiene los elementos mas repetidos.
        const resp = listaArray[listaArray.length-1];
        this.setModa(resp);
        console.log(this.getModa());
    }
}