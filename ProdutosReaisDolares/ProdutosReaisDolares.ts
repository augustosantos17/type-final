// Função que converte o preço em dólares para reais, incluindo o IOF
function converterPrecoParaReais(precoEmDolar: number, taxaDeCambio: number, iof: number = 6.38): { precoEmReais: number, valorIOF: number, precoComIOF: number } {
    const precoEmReais = precoEmDolar * taxaDeCambio;
    const valorIOF = precoEmReais * (iof / 100); // Calcula o valor do IOF
    const precoComIOF = precoEmReais + valorIOF; // Aplica o IOF
    return { precoEmReais, valorIOF, precoComIOF };
}

// Exemplo de dados dos produtos (preços em dólares)
const produtos = [
    { nome: "Mouse", precoEmDolar: 25 },
    { nome: "Teclado", precoEmDolar: 40 },
    { nome: "Monitor", precoEmDolar: 200 },
    { nome: "HD Externo", precoEmDolar: 100 },
    { nome: "SSD", precoEmDolar: 120 },
    { nome: "Placa de Vídeo", precoEmDolar: 500 },
    { nome: "Processador", precoEmDolar: 300 },
    { nome: "Memória RAM", precoEmDolar: 80 },
    { nome: "Fonte", precoEmDolar: 150 },
    { nome: "Gabinete", precoEmDolar: 70 },
];

// Exemplo de taxa de câmbio (1 USD = 5.10 BRL)
const taxaDeCambio = 5.10;

// Converter os preços dos produtos para reais
produtos.forEach(produto => {
    const { precoEmReais, valorIOF, precoComIOF } = converterPrecoParaReais(produto.precoEmDolar, taxaDeCambio);
    console.log(`Produto: ${produto.nome}`);
    console.log(`Preço em Dólares: $${produto.precoEmDolar.toFixed(2)}`);
    console.log(`Preço em Reais (sem IOF): R$ ${precoEmReais.toFixed(2)}`);
    console.log(`Valor do IOF: R$ ${valorIOF.toFixed(2)}`);
    console.log(`Preço final com IOF: R$ ${precoComIOF.toFixed(2)}\n`);
});