const alturaPessoa = 1.70;
const pesoPessoa = 70;

function calcularImc(altura, peso){
    const imc = peso / (Math.pow(altura, 2));
    return imc;
}

const imcPessoa = calcularImc(alturaPessoa, pesoPessoa);

console.log('O valor do imc é ' + imcPessoa.toFixed(2));
if(imcPessoa < 18.5){
    console.log('Abaixo do peso');
}else if(imcPessoa >= 18.5 && imcPessoa < 25){
    console.log('Peso Normal');
}else if(imcPessoa >= 25 && imcPessoa < 30){
    console.log('Acima do peso');
}else if(imcPessoa >= 30 && imcPessoa < 40){
    console.log('Obeso');
}else{
    console.log('Obesidade grave');
}
