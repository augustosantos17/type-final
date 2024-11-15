// Declara o nome do aluno e suas notas
const nomeAluno: string = "João";
const notaMatematica: number = 8;
const notaPortugues: number = 7;
const notaCiencias: number = 6;

// Verifica a situação do aluno em cada matéria
if (notaMatematica >= 7) {
    console.log(`${nomeAluno} foi aprovado em Matemática!`);
} else {
    console.log(`${nomeAluno} foi reprovado em Matemática.`);
}

if (notaPortugues >= 7) {
    console.log(`${nomeAluno} foi aprovado em Português!`);
} else {
    console.log(`${nomeAluno} foi reprovado em Português.`);
}

if (notaCiencias >= 7) {
    console.log(`${nomeAluno} foi aprovado em Ciências!`);
} else {
    console.log(`${nomeAluno} foi reprovado em Ciências.`);
}