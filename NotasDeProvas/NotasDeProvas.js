// Declara o nome do aluno e suas notas
var nomeAluno = "João";
var notaMatematica = 8;
var notaPortugues = 7;
var notaCiencias = 6;
// Verifica a situação do aluno em cada matéria
if (notaMatematica >= 7) {
    console.log("".concat(nomeAluno, " foi aprovado em Matem\u00E1tica!"));
}
else {
    console.log("".concat(nomeAluno, " foi reprovado em Matem\u00E1tica."));
}
if (notaPortugues >= 7) {
    console.log("".concat(nomeAluno, " foi aprovado em Portugu\u00EAs!"));
}
else {
    console.log("".concat(nomeAluno, " foi reprovado em Portugu\u00EAs."));
}
if (notaCiencias >= 7) {
    console.log("".concat(nomeAluno, " foi aprovado em Ci\u00EAncias!"));
}
else {
    console.log("".concat(nomeAluno, " foi reprovado em Ci\u00EAncias."));
}
