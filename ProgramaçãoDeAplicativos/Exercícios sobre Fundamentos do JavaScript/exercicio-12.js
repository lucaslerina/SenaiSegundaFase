/*Escreva uma função que imprima no console o ano atual baseado na "Data Atual” do computador.*/

function imprimirAnoAtual() {
  let data = new Date();
  
  let ano = data.getFullYear();
  
  console.log("O ano atual é: " + ano);
}

imprimirAnoAtual();