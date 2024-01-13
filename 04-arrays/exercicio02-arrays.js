/*2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
*/

const lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    console.log(element);
}

console.log('Imprimindo numeros pares');

for (let i = 0; i < lista.length; i++) {
    if(lista[i] % 2 === 0){
        const par = lista[i];
        console.log(par);
    }
}