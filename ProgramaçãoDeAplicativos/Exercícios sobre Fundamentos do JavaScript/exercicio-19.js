/*Com base na lista de números, escreva um programa que imprima no console uma lista substituindo os múltiplos de 3 por "Fizz", os múltiplos de 5 por "Buzz" e os múltiplos de ambos por "FizzBuzz".
O retorno deve ser: “['Fizz', 7, 'FizzBuzz', 19, 53, 'Fizz', 'Buzz', 'FizzBuzz', 34, 'Fizz']”*/

const numeros = [18, 7, 15, 19, 53, 12, 40, 30, 34, 66];

const usuarios = [
  {
    nome: 'Melba',
    sobrenome: 'Stein',
    idade: 15,
    temAnimalEstimacao: false,
  },
  {
    nome: 'Donovan',
    sobrenome: 'Barrera',
    idade: 18,
    temAnimalEstimacao: false,
  },
  {
    nome: 'Gross',
    sobrenome: 'Maldonado',
    idade: 25,
    temAnimalEstimacao: true,
  },
  {
    nome: 'Massey',
    sobrenome: 'Waller',
    idade: 16,
    temAnimalEstimacao: true,
  },
  {
    nome: 'Harris',
    sobrenome: 'Bowers',
    idade: 22,
    temAnimalEstimacao: true,
  },
  {
    nome: 'Roberson',
    sobrenome: 'Hancock',
    idade: 30,
    temAnimalEstimacao: false,
  },
];


const resultado = numeros.map(num => {

  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } 
  
  else if (num % 3 === 0) {
    return "Fizz";
  } 

  else if (num % 5 === 0) {
    return "Buzz";
  } 

  else {
    return num;
  }
});

console.log(resultado);