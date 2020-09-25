
// Imprime no console as boas vindas ao jogo
 console.log("Bem vindo ao jogo de BlackJack")
// botão confirm para o usuário decidir se quer jogar ou não
 if(confirm("Você quer iniciar uma nova rodada?")) {    
   const carta = comprarCarta()
// declarando as cartas que serão compradas pelo usuário e pelo computador
      let usuario = [comprarCarta(), comprarCarta()]
      let computador = [comprarCarta(), comprarCarta()]
// valor total do usuario 
         usuarioTotal = usuario[0].valor + usuario[1].valor
// valor total do computador
         computadorTotal = computador[0].valor + computador[1].valor
// Imprimindo a pontuação         
         console.log("Usuário -  cartas:", usuario[0].texto," ", usuario[1].texto, " pontuação ", usuarioTotal)
         console.log("Computador -  cartas:", computador[0].texto," ", computador[1].texto, " pontuação ", computadorTotal)
// Condições de empate, usuário ganhador ou computador ganhador
         if (usuarioTotal > computadorTotal){
            console.log ("O usuário ganhou!")
         } else if (usuarioTotal < computadorTotal){
            console.log ("O computador ganhou!") 
         } else {
            console.log("Empate!")
         }
// Se o usuário não quiser participar do jogo
   } else {
      console.log("Joga com a gente, pô!")
   }
