/*3) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.
Exemplo:
    Entrada:
        5
        1
        3
        9
        10
        12

    Saída:
        Números Pares: 10, 12*/

const { gets, print } = require('./funcoes-auxiliares03');

const numerosPares = [];

for (let i = 0; i < 6; i++) {
    const element = gets();
    console.log(element);
    if (element%2 == 0) {
        numerosPares.push(element);
    }
}

console.log('Os númeos pares são');
for (let i = 0; i < numerosPares.length; i++) {
    console.log(numerosPares[i]);
}