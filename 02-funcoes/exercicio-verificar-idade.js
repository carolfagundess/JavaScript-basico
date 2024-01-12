function verificarIdade(idade){
    if(idade>=18){
        return 'Maior de Idadea';
    }else{
        return 'Menor de idade';
    }
}

(function(){
    const idade = 18;
    console.log(verificarIdade(idade));
})()