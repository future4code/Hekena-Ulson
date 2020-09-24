// Interpretação de Código 
// Exercício 1 
// O bloco está adicionando os valores de i à variável "valor" e está printando os valores
// na tela. Os valores de i irão de 0 a 4, por conta da condição i < 5. Os valores da variá-
// vel valor que seriam impressos são 0 , 1 , 3 , 6 e 10, caso o console.log(valor estivesse)
// dentro do for. Como não está, o console.log vai imprimir o valor para i = 4, que é 10.  

// Exercício 2
// a. Serão impressos no console os numeros do array que são maiores que 18, que são: 19, 21, 23, 
// 25, 27 e 30. 
// b. Não sei como achar o índice de cada numero com for of, apenas listá-los, então não sei dizer
// se é possível. Pesquisei uma função que chama findIndex. Talvez combinando os dois (o for of e o
// findIndex fosse possível). 

// Escrita de Código
// Exercício 3
/* a. const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
        for (let numeros of array){
        console.log(numeros)
    } 
*/

/* b. const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
        for (let numeros of array){
        console.log(numeros/10)
    } 
*/

/* c.  const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
        for (let numeros of array){
            if (numeros%2 === 0){
                console.log(numeros)
        }        
    }        
 */

/* d.  const array = ['80', '30', '130', '40', '60', '21', '70', '120', '90', '103', '110', '55']
        let i = 0 
        for (i = 0; i <= array.length; i++){
            console.log("O elemento do index", i, "é", array[i])
        }
 */

 /*e.  const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
        let maiorNumero = 0
        let menorNumero = 50
            for (let numero of array){
                if (maiorNumero < numero){
                    maiorNumero = numero
                }
            }
            for (let numero of array){
                if (menorNumero > numero) {
                    menorNumero = numero
                }
            }
        console.log("O menor número do array é:", menorNumero)
        console.log("O maior número do array é:", maiorNumero) 

 */



