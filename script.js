const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "Você acha que as IA's estão emburrecendo as pessoas?",
        alternativas:["Sim","Não"]
    },
    {
        enunciado: "Você acha que as IA's é algo que as pessoas devem temer futuramente?",
        alternativas:["Sim","Não"]
    },
    {
        enunciado: "Pergunta 3",
        alternativas:["Alternativa 1","Alternativa 2"]
    }
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativa){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}