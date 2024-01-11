const notaUm = 5;
const notaDois = 3;
const notaTres = 7;

const notaMedia = (notaUm + notaDois + notaTres)/3;
console.log('Media do aluno: ' + notaMedia);

if(notaMedia < 5){
    console.log('Reprovado');
}else if( notaMedia>=5 && notaMedia<=7 ){
    console.log('Em Recuperação');
}else if(notaMedia>7){
    console.log('Aprovado');
}