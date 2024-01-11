//criando objeto
const pessoa = {
    nome: 'Carina',
    idade: 20,

    //criando método dentro do objeto
    descrever: function (){
        console.log(`Meu nome é ${this.nome} e eu possuo ${this.idade} anos de idade`);
    }
};

//editando objeto
pessoa.nome = 'Carolina Fagundes';
pessoa.idade = 18;

//chamando método do objeto
pessoa.descrever();

//chamando método novamente com outros parametros
pessoa.nome = 'Carolina';
pessoa.idade = 17;

pessoa.descrever();

//acessando dinamicamente o atributo 
const atributo = 'idade';

console.log(pessoa[atributo]);
