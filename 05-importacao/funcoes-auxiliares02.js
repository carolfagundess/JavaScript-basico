const entrada = 2

function gets() {
    const valor = entrada;
    return valor;
}
function print(texto){
    console.log(texto);
}

/* exportando os objetos literais com as funções*/
module.exports = {gets, print};