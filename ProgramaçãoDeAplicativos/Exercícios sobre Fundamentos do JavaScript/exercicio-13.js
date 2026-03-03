/*Escreva um programa que calcule e mostre a tabuada (até 10x) de um número qualquer, digitado pelo usuário. Exemplo: Informado o número 5:
”5 x 1 = 5”
”5 x 2 = 10”
…
”5 x 9 = 45”
”5 x 10 = 50”*/

let numero = prompt("Digite o número para ver a tabuada:");

for (let i = 1; i <= 10; i++) {
  let resultado = numero * i;
  console.log(numero + " x " + i + " = " + resultado);
}