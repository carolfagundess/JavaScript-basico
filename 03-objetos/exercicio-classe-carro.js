/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

//um metodo é uma função dentro de um objeto

//criando a classe carro
class Carros {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    //metodo dentro da classe, que tem dois parametros quando instaciada
    calcularGastoViagem(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

//instanciando um carro
const uno = new Carros('fiat', 'branco', 1 / 12);

//exibindo no console
console.log(uno);

//exibindo no console e 
console.log(uno.calcularGastoViagem(70, 5));
