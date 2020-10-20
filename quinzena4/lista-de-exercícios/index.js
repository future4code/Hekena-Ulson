// Exercícios de Interpretação de Código
/* 1. É uma função que converte o valor do dólar em reais de acordo com a cotação do dólar.
A cotação atual do dólar é dada através de um prompt. A função em questão devolve o valor
do real de acordo com o valor de 100 "dólares"*/

/* 2. Essa função faz com que um dado valorDeInvestimento seja direcionado 
pra um determinado "caso" de investimento. A partir daí, o valor é multiplicado
pelo tipo rentabilidade de cada investimento. O resultado retorna o resultado do investimento 
para o valor de */
/* 3. A função separa em dois arrays diferentes os elementos do array numeros. O if faz 
com que os numeros pares entrem no array1 através do push, enquanto o else
acaba por inserir no array2 os numeros ímpares. Em seguida é impresso na tela 
o array numeros, o array1 e o array2 através do .length */
/* 4. A função separa o numero do array que tem o maior valor no primeiro if ao comparar 
o numero com o infinito e o segundo if seleciona o numero de menor valor através da comparação
com o numero2. Em seguida, são impressos o array1 e o array2 na tela.  */

// Exercícios de Lógica de Programação 
/* 1. Três maneiras de iterar uma lista: o laço while, o laço for e o laço for of */
/*  
    let array = [13, 24, 52, 34]
    for (let numeros of array) {
    console.log(numeros)
    }  */
/* 2. a) false
   b) false
   c) true  
   d) true 
   e) false */  


/* 3. O código não funciona pois o valor N não é inserido e, portanto, não é 
possível saber a que a variável i está sendo comparada. 
Uma possível solução seria essa:

    let N = Number(prompt("insira um numero"))
    let QuantidadeDeNumerosPares = 0
    let i = 0
    while(i <= N) {
       numerosPares = i*2
      console.log(numerosPares)
      i++
    } */
    
/* 4. let tipoDeTriangulo = (a, b, c) => {
  let ehTriangulo = a + b + c
  if (ehTriangulo <= 180){
    if (a === b === c){
      console.log("O triângulo é equilátero")
    } else if ((a !== b) && (b !== c) && (a !== c)){
      console.log("O triângulo é escaleno")
    } else {
      console.log("O triângulo é Iscóceles")
    } 
  
  } else {
    console.log("A soma dos ângulos é maior do que 180 graus")
  }
}

const resultado = tipoDeTriangulo(60, 60, 60) */

/*5.  let numero1 = Number(prompt("Insira o primeiro numero"))
      let numero2 = Number(prompt("Insira o segundo numero"))
      let comparacaoDeNumeros = (numero1, numero2) => {
      let subtracaoNumeros = numero1-numero2
        if (numero1 < numero2){
          console.log(numero1, "é menor que", numero2)
        } else{
          console.log(numero1, "é maior que", numero2)
        }
        if ((numero1 % numero2) === 0){
          console.log(numero1, "é divisível por", numero2)
        } else {
          console.log(numero1, "não é divisível por", numero2)
        }
        if ((numero2 % numero1) === 0){
          console.log(numero2, "é divisível por", numero1)
        } else {
          console.log(numero2, "não é divisível por", numero1)
        }
        if (subtracaoNumeros >= 0){
          console.log("A diferença entre eles é", subtracaoNumeros)
        } else {
          console.log("A diferença entre eles é negativa")
        }
      }

      let resultado = comparacaoDeNumeros(numero1, numero2) */

// Exercícios de Funções
/*1. (ESSE EU NÃO CONSEGUI FAZER) 
    let arrayDeNumeros = []
    let compararNumeros = (segundoMaior, segundoMenor) => {
    let inf = Infinity
    for(let numero of arrayDeNumeros){
    
    if()
      }
} */

/* 2. let alerta = () => {
      alert ("Olá parcero!")
    } 
    let resultado = alerta() */

// Exercícios de Objetos
/* 1. Objetos são estruturas que permitem representar dados mais complexos e, dessa
forma, se assemelham mais a modelos do mundo real. Podemos utilizar objetos quando 
vamos fazer o cadastro de uma pessoa, para armazenar suas informações em diferentes chaves, 
enquanto que arrays são mais utilizados quando é preciso fazer um armazenamento de objetos. */

/* 2. let criaRetangulo = (lado1, lado2) => {
        const retangulo = {
          largura : lado1,
          altura : lado2,
          perímetro : (2 * (lado1+lado2)),
          área : lado2 * lado1
        }
        return retangulo
      }

      const resultado = criaRetangulo(4,6)
      console.log(resultado) */

/* 3. const filmeFavorito = {
        título: 'OldBoy',
        ano: 2003,
        diretor: 'Park Chan-wook',
        atores: ['Choi Min-sik', 'Yoo Ji-tae', 'Kang Hye-jung']
      }

      console.log("Venha assistir o filme", filmeFavorito.título, 
      ", de", filmeFavorito.ano, "dirigido por", filmeFavorito.diretor, "e estrelado por", filmeFavorito.atores) */

/* 4. const pessoa = {
        nome: 'Juninho',
        idade: 45,
        email: 'juninhogamer@gmail.com',
        endereco: 'Av. Brasil, 666'
      }

      const pessoaAnonima = {
        ... pessoa,
        nome: 'Anônimo'
      }

      console.log(pessoa)
      console.log(pessoaAnonima) */

// Exercícios de Funções de Array
/* 1. const array1 = [
        { nome: "Pedro", idade: 20 },
        { nome: "João", idade: 10 },
        { nome: "Paula", idade: 12 },
        { nome: "Artur", idade: 89 } 
      ] 

a)     const callback = (maiorDeIdade) => {
        if (maiorDeIdade.idade >= 20){
          return true
        } else {
          return false
        }
      }

b)    const callback2 = (menorDeIdade) => {
        if (menorDeIdade.idade < 20){
          return true
        } else {
          return false
        }
      }

      const maioresDeIdade = array1.filter(callback)
      const menoresDeIdade = array1.filter(callback2)
      console.log (maioresDeIdade)
      console.log(menoresDeIdade) */

/* 2. 
a)
      const array = [1, 2, 3, 4, 5, 6]
        const funcao = (array) => {
            let novoArray = array*2
            return novoArray
          }
        let resultado = array.map(funcao)
        console.log(resultado) 
b)    const array = [1, 2, 3, 4, 5, 6]
        const funcao = (array) => {
            let novoArray = array*3
            return novoArray
          }
        let resultado = String(array.map(funcao))
        console.log(resultado) 

c)      const array = [1, 2, 3, 4, 5, 6]
          const funcao = (array) => {
              if(array % 2 === 0){
                let elementosPares = array
                console.log(`${elementosPares} é par`)
              } else { 
                let elementosImpares = array
                console.log(`${elementosImpares} é ímpar`)

              }
            }
          let resultado = String(array.map(funcao))
          console.log(resultado) */

/* 3.   const pessoas = [
          { nome: "Paula", idade: 12, altura: 1.8},
          { nome: "João", idade: 20, altura: 1.3},
          { nome: "Pedro", idade: 15, altura: 1.9},
          { nome: "Luciano", idade: 22, altura: 1.8},
          { nome: "Artur", idade: 10, altura: 1.2},
          { nome: "Soter", idade: 70, altura: 1.9}
        ]

a)      let permissao = (pessoas) => {
          if (pessoas.idade > 14 && pessoas.idade < 60 && pessoas.altura > 1.5){
            return true
          } else{
            return false
          }
        }

b)     let semPermissao = (pessoas) => {
          if (pessoas.idade < 14  ||  pessoas.idade > 60  || pessoas.altura <1.5){
            return true
          } else {
            return false
          }
        }

        let podemEntrar = pessoas.filter(permissao)
        let naoPodemEntrar = pessoas.filter(semPermissao)
        console.log(podemEntrar)
        console.log(naoPodemEntrar) */

/* 4.   const consultas = [
          { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
          { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
          { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
          { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
        ]

        let tratamento = []
          function tratamentoGenero(genero) {
            tratamento = []
            if (genero === "masculino") {
                tratamento.push("Sr.", "lembrá-lo") 
            } else {
                tratamento.push("Sra.", "lembrá-la")
            }
          }
        let naoCancelada = (consultas) => {
          if(consultas.genero === 'feminino' ){
              tratamentoGenero("feminino")  
          }
          if(consultas.genero === 'masculino'){
            tratamentoGenero("masculino")
          }
          if (consultas.cancelada === false){
            console.log(`Olá, ${tratamento[0]} ${consultas.nome}. Estamos enviando esta mensagem para ${tratamento[1]} da sua consulta no dia ${consultas.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`)
          } 
        }

        
        let cancelada = (consultas) => {
          if (consultas.cancelada === true){
            if(consultas.genero === 'feminino' ){
              tratamentoGenero("feminino")  
          }
            if(consultas.genero === 'masculino'){
              tratamentoGenero("masculino")
          }
             
            console.log(`Olá, ${tratamento[0]} ${consultas.nome}. Infelizmente, sua consulta marcada para o dia ${consultas.dataDaConsulta} foi cancelada. Se quiser, pode entrar em  contato conosco para remarcá-la`)
          } 
        }

        const consultasCanceladas = consultas.filter(cancelada)
        const consultasConfirmadas = consultas.filter(naoCancelada) */

/*5.     const contas = [
          { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
          { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
          { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
          { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
          { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
          { cliente: "Soter", saldoTotal: 1200, compras: [] }
        ]
        
        contas.forEach(element => {
          let debito = 0
          for (const compra of element.compras) {
              debito += compra
          }
          element.saldoTotal -= debito 
      });

      console.log(contas) */

        