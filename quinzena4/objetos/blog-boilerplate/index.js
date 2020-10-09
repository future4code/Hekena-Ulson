let arrayDeObjetos = []
function capturarInputs() {
    const inputTitulo = document.getElementById("titulo-post")
    const inputAutor = document.getElementById("autor-post")
    const inputConteudo = document.getElementById("conteudo-post")
    
    const postBlog = {
        titulo: inputTitulo.value,
        autor: inputAutor.value,
        conteudo: inputConteudo.value
    }

    arrayDeObjetos.push(postBlog) 
        titulo = "",
        autor = "",
        conteudo = "",
        inserirPosts()
} 

function inserirPosts(){
  const postsInseridos = document.getElementById('container-de-posts')
  postsInseridos.innerHTML = ""
    for (let elemento of arrayDeObjetos) {
        postsInseridos.innerHTML += novoPost(elemento)
    }
}

function novoPost(postzinho) {
    return "<div class='novoPostDoBlog'>" +
        "<h3>" + postzinho.titulo + "</h3>" +
        "<p><i>" + postzinho.autor + "</i></p>" + 
        "<p>" + postzinho.conteudo + "</p>"+
        "</div>"
}


