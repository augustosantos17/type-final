class Aluno {
    nome: string;
    idade: number;

    constructor (_nome: string, _idade: number) {
        this.nome = _nome;
        this.idade = _idade;
    }

    andar(direcao: string) {
        console.log("Aluno esta andando na direção ", direcao)
    }

    chorar(qtdLitros: number) {
        console.log(`O ${this.nome} chorou  ${qtdLitros} litros`)
    }

    detalhar() {
        console.log (`O aluno ${this.nome} tem a idade ${this.idade}`)
    }
}

var pedrinho = new Aluno ("Augustão", 19);
pedrinho.detalhar();
pedrinho.andar("cima");
pedrinho.chorar(51);

var paulao = new Aluno ("Paulão ", 40)
paulao.andar("direita");
paulao.chorar(10);
paulao.detalhar();