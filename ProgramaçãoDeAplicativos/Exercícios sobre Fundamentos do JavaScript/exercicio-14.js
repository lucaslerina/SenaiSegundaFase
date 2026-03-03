/*A PARTIR DAQUI USAR O ARQUIVO "variaveis.js" PARA RESOLVER AS QUESTÕES 14, 15, 16, 17, 18 E 19

Com base na lista de números, escreva um programa que imprima no console os números que são maiores que 20.
*/

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

numeros.forEach(numero => {

  if (numero > 20) {
    console.log(numero);
  }
});

