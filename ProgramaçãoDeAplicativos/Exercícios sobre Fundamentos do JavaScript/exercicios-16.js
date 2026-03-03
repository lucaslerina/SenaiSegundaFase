/*Com base na lista de usuários, escreva um programa que imprima no console os usuários maiores de idade com base na legislação brasileira. 
*/
const numeros = [18, 7, 15, 19, 53, 12, 40, 30, 34, 66];

const usuarios = [
  { nome: 'Melba', sobrenome: 'Stein', idade: 15, temAnimalEstimacao: false },
  { nome: 'Donovan', sobrenome: 'Barrera', idade: 18, temAnimalEstimacao: false },
  { nome: 'Gross', sobrenome: 'Maldonado', idade: 25, temAnimalEstimacao: true },
  { nome: 'Massey', sobrenome: 'Waller', idade: 16, temAnimalEstimacao: true },
  { nome: 'Harris', sobrenome: 'Bowers', idade: 22, temAnimalEstimacao: true },
  { nome: 'Roberson', sobrenome: 'Hancock', idade: 30, temAnimalEstimacao: false },
];


usuarios.forEach(usuario => {

  if (usuario.idade >= 18) {
    console.log(usuario.nome + " é maior de idade (" + usuario.idade + " anos)");
  }
});