const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "Você sabe como as IA's são feitas?",
        alternativas: ["Sim", "Não"]
    },
    {
        enunciado: "Você acha que as IA's estão deixando as pessoas burras?",
        alternativas: ["Sim", "Não"]
    },
    {
        enunciado: "Você acha que as IA's estão atrapalhando mais do que deveriam ajudar?",
        alternativas: ["Sim", "Não"]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = pergunta[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativa();
}

function mostraAlternativa() {

}