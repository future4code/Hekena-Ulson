// Exercícios de Interpretação de Código
// Exercício 1
// a. Seriam impressos os valores 10 e 50 
// b. O código executaria a função mas nada seria impresso no console. 

// Exercício 2
// a. Os valores impressos no console seriam os dois primeiros valores do array, 
// que são o "Darvas" e "Goli". 
// b. O console imprimiria os primeiros caracteres do nome da Amanda, pois ele inter
// pretaria que ela é um array e seus índices 0 e 1 são, respectivamente, A e m

// Exercício 3
// Acredito que essa função faz um array de numeros pares ao quadrado e os adiciona 
// ao array. Acho que o melhor nome para a const seria arrayDeNumerosParesAoQuadrado.


// Exercício 4
/*a. let informacoes = () =>{
    const nome = "Helena"
    const idade = 24
    const cidade = "Campinas"
    const ocupacao = "estudante"

    const informacoesPessoais = [nome, idade, cidade, ocupacao]
    return informacoesPessoais
}
    const fraseCompleta = informacoes ()
    console.log("Eu sou a", fraseCompleta[0], ", tenho", fraseCompleta[1], "anos, moro em", fraseCompleta[2], "e sou", fraseCompleta[3]) */

/*b. let informacoes = (nome, idade, cidade, ocupacao) =>{
    let profissao = ocupacao
    if (profissao){
        ocupacao = "sou estudante"
    } else {
        ocupacao = "não sou estudante"     
    }
    const informacoesPessoais = [nome, idade, cidade, ocupacao]
    return informacoesPessoais
}

    const fraseCompleta = informacoes("Helena", 24, "Campinas", false)
    console.log("Eu sou a", fraseCompleta[0], ", tenho", fraseCompleta[1], "anos, moro em", fraseCompleta[2], "e", fraseCompleta[3]) 
 */

 // Exercício 5
 /*a. let numeros = (numero1, numero2) =>{
     let soma = numero1 + numero2
     return soma 
 }
    let resultado = numeros()
    console.log(resultado)
 */
 
/*b.let numeros = (numero1, numero2) => {
    let resultado = true
    if (numero1 >= numero2){
        console.log(resultado)
    } else {
        console.log(!resultado)
    }
    return resultado

}
   let resultado = numeros(5,2) */

/*c. let funcao = () =>{
       let palavra = prompt("Escreva uma palavra")
       const array = [palavra, palavra, palavra, palavra, palavra, palavra, palavra, palavra, palavra, palavra]
       return array
   }
    let array2 = funcao()
    console.log(array2) */

// Exercício 6
  
/*a. let arrayDeNumeros = (arrayRecebido) => {
        let array = arrayRecebido
        return array.length
    }
        let elementosDoArray = arrayDeNumeros ([10, 23, 45, 78, 90, 52, 35, 67, 84, 22])
        console.log(elementosDoArray)
 */

/* b. let parOuImpar = (numero) =>{
        let elemento = numero
        let ehPar = true
        if (elemento % 2 === 0){
            console.log(ehPar)
        } else {
            console.log(!ehPar)
        }
        return ehPar 
    }
        let numeroEhParOuImpar = parOuImpar()
 */   

/* c. let arrayDeNumeros = (arrayRecebido) => {
        let array = arrayRecebido
        let novoArray = []
        for (let elementos of array){
            if (elementos % 2 === 0){
                novoArray.push(elementos)
            }
        }
            return novoArray
        }
    
        let elementosDoArray = arrayDeNumeros ([10, 23, 45, 78, 90, 52, 35, 67, 84, 22])
        console.log(elementosDoArray.length) */

    /*d. Não consegui fazer o item d. Esse foi meu progresso, mas não funcionou.
     let arrayDeNumeros = (arrayRecebido) => {
            let array = arrayRecebido
            let novoArray = []
                    let parOuImpar = (array) =>{
                        let elemento = array
                        let ehPar = true
                        if (elemento % 2 === 0){
                            novoArray.push(elemento)
                        } else {}
                        return novoArray 
                    }
                return novoArray
                }
            let elementosDoArray = arrayDeNumeros ([10, 23, 45, 78, 90, 52, 35, 67, 84, 22])
            console.log(elementosDoArray.length) */