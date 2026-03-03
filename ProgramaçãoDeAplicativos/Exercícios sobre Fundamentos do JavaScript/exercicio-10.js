/*Escreva uma função que recebe uma string como argumento, e imprima no console o resultado com a seguinte condições:
”Tamanho até 5 carácteres = pequena”, ”Tamanho até 10 carácteres = média”, ”Tamanho a cima de 10 carácteres = grande”
Exemplo de resultado: “A string ‘aplicativos’ é grande.” */

function avaliarTamanho(texto) {
  let categoria;

  if (texto.length <= 5) {
    categoria = "pequena";
  } else if (texto.length <= 10) {
    categoria = "média";
  } else {
    categoria = "grande";
  }

  console.log(`A string '${texto}' é ${categoria}.`);
}


avaliarTamanho("Oi");          
avaliarTamanho("Javascript");  
avaliarTamanho("Aplicativos"); 