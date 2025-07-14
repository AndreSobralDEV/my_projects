function somaNumerosPares(n) {
    var soma = 0;
    for (var i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            soma += i;
        }
    }
    return soma;
}
// Exemplo de uso:
var numero = 10;
var resultado = somaNumerosPares(numero);
console.log("A soma dos n\u00FAmeros pares at\u00E9 ".concat(numero, " \u00E9: ").concat(resultado));
