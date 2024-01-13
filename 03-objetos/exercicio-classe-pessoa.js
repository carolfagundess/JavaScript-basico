/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    //método para calcular IMC que pertence a classe, logo os parametros nao precisam ser adicionados
    calcularImc(){
        return this.peso / (Math.pow(this.altura, 2));
    }

    verificarImc(){
       const imc = this.calcularImc();
        if(imc < 18.5){
            return 'Abaixo do peso';
        }else if(imc >= 18.5 && imc < 25){
            return 'Peso Normal';
        }else if(imc >= 25 && imc < 30){
            return 'Acima do peso'
        }else if(imc >= 30 && imc < 40){
            return 'Obeso';
        }else{
            return 'Obesidade grave';
        }
    }
}

//instaciando uma pessoa
const jose = new Pessoa('jose', 70, 1.75);
console.log(jose);
console.log(jose.calcularImc());
console.log(jose.verificarImc());
console.log(jose.nome)