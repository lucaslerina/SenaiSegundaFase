/*Crie uma variável para armazenar o raio de um círculo, calcule e imprima no console a área do círculo.
Fórmula de cálculo do circulo:
pi = 3.14;
pi * (raio²)
O resultado deverá ser: ”A área do círculo é: xx” */


let raio = prompt("Digite o valor do raio:");
let pi = 3.14;


let area = pi * (raio * raio);

console.log("A área do círculo é: " + area);