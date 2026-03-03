/*Escreva um programa que solicite ao usuário um número e avalie se um número é par ou ímpar,
 imprima o resultado no console conforme exemplo: ”O número 10 é par" ou ”O número 9 é impar”. */

 let numero = prompt("Digite um número:");

if (numero % 2 === 0) {
  console.log("O número " + numero + " é par");
} else {
  console.log("O número " + numero + " é ímpar");
}