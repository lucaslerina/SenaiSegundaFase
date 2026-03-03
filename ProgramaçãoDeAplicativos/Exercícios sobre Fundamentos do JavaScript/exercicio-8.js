/*Crie um array com 3 frutas e imprima cada uma no console.
Adicione mais uma fruta ao array e imprima o array atualizado.
Remova a última fruta do array e imprima o array atualizado.*/


let frutas = ["Maçã", "Banana", "Uva"];
console.log("Frutas iniciais:");
frutas.forEach(fruta => console.log(fruta));


frutas.push("Morango");
console.log("Após adicionar:");
console.log(frutas);


frutas.pop();
console.log("Após remover a última:");
console.log(frutas);