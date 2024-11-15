// Função que converte o preço em dólares para reais, incluindo o IOF e calcula o preço de venda
function converterPrecoParaReais1(precoEmDolar1: number, taxaDeCambio1: number, iof1: number = 6.38, lucro1: number = 45): { precoEmReais1: number, valorIOF1: number, precoComIOF1: number, precoVenda1: number } {
    const precoEmReais1 = precoEmDolar1 * taxaDeCambio1;
    const valorIOF1 = precoEmReais1 * (iof1 / 100); // Calcula o valor do IOF
    const precoComIOF1 = precoEmReais1 + valorIOF1; // Aplica o IOF

    // Calcula o preço de venda com 45% de lucro
    const precoVenda1 = precoComIOF1 * (1 + lucro1 / 100);

    return { precoEmReais1, valorIOF1, precoComIOF1, precoVenda1 };
}

// Exemplo de dados dos produtos (preços em dólares)
const produtos1 = [
    { nome1: "Mouse", precoEmDolar1: 25 },
    { nome1: "Teclado", precoEmDolar1: 40 },
    { nome1: "Monitor", precoEmDolar1: 200 },
    { nome1: "HD Externo", precoEmDolar1: 100 },
    { nome1: "SSD", precoEmDolar1: 120 },
    { nome1: "Placa de Vídeo", precoEmDolar1: 500 },
    { nome1: "Processador", precoEmDolar1: 300 },
    { nome1: "Memória RAM", precoEmDolar1: 80 },
    { nome1: "Fonte", precoEmDolar1: 150 },
    { nome1: "Gabinete", precoEmDolar1: 70 },
];

// Exemplo de taxa de câmbio (1 USD = 5.10 BRL)
const taxaDeCambio1 = 5.10;

// Converter os preços dos produtos para reais e calcular o preço de venda
produtos1.forEach(produto1 => {
    const { precoEmReais1, valorIOF1, precoComIOF1, precoVenda1 } = converterPrecoParaReais1(produto1.precoEmDolar1, taxaDeCambio1);
    console.log(`Produto: ${produto1.nome1}`);
    console.log(`Preço em Dólares: $${produto1.precoEmDolar1.toFixed(2)}`);
    console.log(`Preço em Reais (sem IOF): R$ ${precoEmReais1.toFixed(2)}`);
    console.log(`Valor do IOF: R$ ${valorIOF1.toFixed(2)}`);
    console.log(`Preço final com IOF: R$ ${precoComIOF1.toFixed(2)}`);
    console.log(`Preço de venda (com 45% de lucro): R$ ${precoVenda1.toFixed(2)}\n`);
});