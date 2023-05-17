/*
    O que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

    - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua
        - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
        - passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
        - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
        - passo 4 - adicionar a classe modo-escuro no body
        - passo 5 - trocar a imagem do botão de alterar tema pra lua

    - objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol
        - passo 6 - verificar se o body já tem a classe modo-escuro
        - passo 7 - remover a classe do modo-escuro do body
        - passo 8 - trocar a imagem do botão de alterar tema pra sol
*/




// objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua
// passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("botao-tema");  // tudo que esta no lado direito do = e pra fazer em tal id a const botaoAlterarTema. 

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao") // .e nome da classe, para puxar classe
// passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body   
const body = document.querySelector("body")  // queryselector ele puxa qualquer tag

// passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {

    // passo 6 - verificar se o body já tem a classe modo-escuro
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");   // seleciona a classe modo-escuro e o contains verifica se a clase modo escuro ja existe.






        // poderia remover body.classList.add("modo-escuro"); / body.classList.remove("modo-escuro"); e usar a tag >
        // body.classList.toggle("modo-escuro");  // toggle ele alterna em add e remove







    if (modoEscuroEstaAtivo) {
        //- passo 7 - remover a classe do modo-escuro do body
        body.classList.remove("modo-escuro");  // classlist seleciona a classe modo-escuro e remove


        // - passo 8 - trocar a imagem do botão de alterar tema pra sol
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/sun.png");

    } else {
        // passo 4 - adicionar a classe modo-escuro no body
        body.classList.add("modo-escuro"); // modo-escuro esta editado no css. linha 9

        // passo 5 - trocar a imagem do botão de alterar tema pra lua
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/moon.png"); // ele troca o atributo''src'' pelo novo caminho de imagem

        // objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol

    }
});


