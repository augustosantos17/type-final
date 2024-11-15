// Declara a variável 'camiseta' com o preço original de 80 reais
var camiseta = 80;

// Declara a variável 'desconto' com o valor de 15% (0.15)
var desconto = 0.15;

// Calcula o valor do desconto
var valorDesconto = camiseta * desconto;

// Calcula o preço final após o desconto
var precoFinal = camiseta - valorDesconto;

// Exibe o preço final no console
console.log("Preço original: R$", camiseta);
console.log("Desconto: R$", valorDesconto);
console.log("Preço final com desconto: R$", precoFinal);