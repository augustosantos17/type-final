// Função que converte o preço em dólares para reais, incluindo o IOF
function converterPrecoParaReais(precoEmDolar, taxaDeCambio, iof) {
    if (iof === void 0) { iof = 6.38; }
    var precoEmReais = precoEmDolar * taxaDeCambio;
    var valorIOF = precoEmReais * (iof / 100); // Calcula o valor do IOF
    var precoComIOF = precoEmReais + valorIOF; // Aplica o IOF
    return { precoEmReais: precoEmReais, valorIOF: valorIOF, precoComIOF: precoComIOF };
}
// Exemplo de dados dos produtos (preços em dólares)
var produtos = [
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
var taxaDeCambio = 5.10;
// Converter os preços dos produtos para reais
produtos.forEach(function (produto) {
    var _a = converterPrecoParaReais(produto.precoEmDolar, taxaDeCambio), precoEmReais = _a.precoEmReais, valorIOF = _a.valorIOF, precoComIOF = _a.precoComIOF;
    console.log("Produto: ".concat(produto.nome));
    console.log("Pre\u00E7o em D\u00F3lares: $".concat(produto.precoEmDolar.toFixed(2)));
    console.log("Pre\u00E7o em Reais (sem IOF): R$ ".concat(precoEmReais.toFixed(2)));
    console.log("Valor do IOF: R$ ".concat(valorIOF.toFixed(2)));
    console.log("Pre\u00E7o final com IOF: R$ ".concat(precoComIOF.toFixed(2), "\n"));
});
