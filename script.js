const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [     //serve para abrir lista de perguntas
    {   //abre o objeto das perguntas
        enunciado: "Você acha que as IA's estão emburrecendo as pessoas?",
        alternativas: [
            {texto: "Sim, ",
            afirmação:"acredito que elas estão facilitando demais as coisas básicas."}, 

            {texto: "Não, ",
            afirmação:"pois ela veio para auxiliar as pessoas."}]
    },
    { 
        enunciado: "Você acha que as IA's são algo que as pessoas devem temer futuramente?",
        alternativas: [
            {texto: "Sim, ",
            afirmação:"devem temer."}, 
                
            {texto: "Não, ",
            afirmação:"não devem temer."}]
    },
    { 
        enunciado: "Você acredita que a tecnologia irá atrapalhar na juventude das pessoas?",
        alternativas: [
            {texto: "Sim, ",
            afirmação:"vai atrapalhar."}, 
                
            {texto: "Não, ",
            afirmação:"não vai atrapalhar."}]
    },
]

let posicao = 0;
let perguntaAtual;
let respostas = "";

function mostraPergunta() {
    if (posicao >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas += afirmacoes + "";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Em 25 anos...";
    textoResultado.textContent = respostas;
    caixaAlternativa.textContent = "";
}
mostraPergunta();