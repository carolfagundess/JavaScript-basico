/*1) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 90

//        importando o arquivo em um objeto para ter as funções do arquivo*/
const { gets, print } = require('./funcoes-auxiliares01');

maiorValor = 0;

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    console.log(numeroSorteado)
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}



print(`o maior valor é: ${maiorValor}`);