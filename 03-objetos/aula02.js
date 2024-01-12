/*trabalhando com classes, com dinamização
//refatorando aula 01 - intancia/definição
/modelo de pessoa*/
class Pessoa {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade; 
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e eu possuo ${this.idade} anos de idade`);
    }
}


//instaciando uma pessoa com o construtor
const carol = new Pessoa('Carolina Fagundes', 18);
const gabi = new Pessoa('Gabriela Alves', 29);

carol.descrever();
gabi.descrever();

//imprimindo no terminal o objeto pessoa
 console.log(carol);