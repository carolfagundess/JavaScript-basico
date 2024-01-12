/*
1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
 */

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