/*Crie um objeto que represente um carro com propriedades como marca, modelo e ano. Imprima cada propriedade no console.
Adicione uma propriedade representando a cor do carro e imprima o objeto atualizado.
Remova a propriedade de ano do objeto e imprima o objeto atualizado.*/

let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2024
};

console.log("Marca:", carro.marca);
console.log("Modelo:", carro.modelo);
console.log("Ano:", carro.ano);


carro.cor = "Prata";
console.log("Com a cor adicionada:", carro);


delete carro.ano;
console.log("Após remover o ano:", carro);