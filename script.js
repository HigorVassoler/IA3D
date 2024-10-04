const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "Você acha que as IA's estão emburrecendo as pessoas?",
        alternativas: [{
            texto: "Sim, ",
            afirmativa: "acredito que elas estão facilitando demais as coisas básicas."
        },
        {
            texto: "Não, ",
            afirmativa: "pois ela veio para auxiliar as pessoas."
        }
        ]
    },
    {
        enunciado: "Você acha que as IA's são algo que as pessoas devem temer futuramente?",
        alternativas: [{
            texto: "Sim, ",
            afirmativa: "afirmativassss"
        },
        {
            texto: "Não, ",
            afirmativa: "Afirmativa da alternativa 2"
        }
        ]
    },
    {
        enunciado: "Você acredita que a tecnologia irá atrapalhar na juventude das pessoas?",
        alternativas: [{
            texto: "Sim, ",
            afirmativa: "Afirmativa da alternativa 1"
        },
        {
            texto: "Não, ",
            afirmativa: "Afirmativa da alternativa 2"
        }
        ]
    }
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativa) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa);
        caixaAlternativa.appendChild(botaoAlternativas);
}
function respostaSelecionada(opcaoSelecionada){
    posicao++;
}
mostraPergunta();