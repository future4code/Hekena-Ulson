// Interpretação de Código
// Exercício 1 
// O código verifica se um número é par ou ímpar. A condição do if
// é que ele seja um numero par (o resto da divisão por 2 deve ter
// resultado 0), ou seja, para passar no teste o numero deve ser par. 
// A mensagem de não passar no teste acontece quando o resto da divisão
// do número é diferente de 0, ou seja, no caso do número ser ímpar.

// Exercício 2
// a. O código serve para que o cliente escolha uma fruta e o programa retorne 
// o preço dela. 
// b. O preço da fruta Maçã é R$ 2.25
// c. Acredito que o console imprimiria os dois preços: o 5.5 e em seguida o 5, já
// que sem o break o programa segue a leitura do código.

// Exercicio 3
// a. O primeiro código está transformando em Number o input String do usuário.
// b. Caso fosse inserido o número 10, a mensagem que seria impressa seria "Esse 
// número passou no teste", já que 10 é true para a condição que está inserida no if.
// Caso o número fosse -10, nada seria impresso na tela.
// c. Acredito que haveria um erro em relação ao console.log(mensagem), pois a let mensagem
// foi declarada dentro do escopo filho (do if) e portanto não pode ser acessada pelo escopo pai.

// Escrita de Código 
// Exercício 4

/* const maiorDeIdade = Number(prompt("Insira sua idade"))

    if (maiorDeIdade >= 18){
        console.log ("Você pode dirigir! Arrasou!")
    } else {
        console.log ("Você não pode dirigir! Eita nois.")
    } */

// Exercício 5
/* const periodo = prompt("Digite em qual turno você estuda: M para Matutino, V para Vespertino e N para noturno")
if (periodo === "M"){
    console.log("Bom dia!")
} else if (periodo === "V") {
    console.log("Boa tarde!")
} else if (periodo === "N") {
    console.log("Boa noite!")
} else {
    console.log("Digite novamente seu turno")
} */

// Exercício 6
/* const periodo = prompt("Digite em qual turno você estuda: M para Matutino, V para Vespertino e N para noturno")

switch (periodo) {
    case 'M':
        console.log("Bom dia")
        break
    case 'V': 
        console.log("Boa tarde")
        break
    case 'N': 
        console.log("Boa noite!")
        break
    default: 
        console.log("Digite novamente seu turno")
        break
    } */

// Exercício 7
/* const genero = prompt("Insira o gênero do filme que você quer ver")
const preco = Number(prompt("Preço do ingresso que você pode pagar"))

if (genero === "fantasia" && preco < 15 ) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme")
} */

// Desafio 1
/* const genero = prompt("Insira o gênero do filme que você quer ver")
const preco = Number(prompt("Preço do ingresso que você pode pagar"))

if (genero === "fantasia" && preco < 15 ) {
    const snack = prompt ("Qual snack você quer comer durante o filme?")
    console.log("Bom filme com", snack)
} else {
    console.log("Escolha outro filme")
} */

// Desafio 2 
// Não vou ter tempo pra fazer pq estou numa correria louca hoje!