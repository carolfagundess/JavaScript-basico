function calcularImc(altura, peso){
    const imc = peso / (Math.pow(altura, 2));
    return imc;
}

function verificarImc(imc){
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

function main(){
    const altura = 1.70;
    const peso = 70;

    const imc = calcularImc(altura, peso);
    console.log('O valor do imc é ' + imc.toFixed(2));
    console.log(verificarImc(imc));
}

main();