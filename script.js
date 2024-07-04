const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Frio é a presença de baixa temperatura, principalmente na atmosfera, que expressa ou parece possuir uma temperatura mais baixa do que a corporal. O frio interfere no seu cotidiano?",
        alternativas: [
            {
                texto:  "Sim,pois tenho uma rotina para seguir.",
                afirmacao:"O frio nos ajuda a queimar mais calorias, e melhora o funcionamento cerebral. "
            },
            {
                texto: "Não,pois fico no conforto da minha casa e não faço nada",
                afirmacao: "O frio deixa nossa pele ressecada, baixa imunidade e também favorece a atividade de vírus respiratórios."
            }
           
        ]
    },
    {
        enunciado: "Para você apartir de quantos graus é considerada uma temperatura baixa? ",
        alternativas: [
            {
                texto: "A baixo de 22° graus.",
                afirmacao:"É suficiente para manter o ambiente confortável sem sobrecarregar o sistema de aquecimento. "
            },
            {
                texto: "A baixo de 15° graus",
                afirmacao:" O clima já está mais fresco, pronto para tirar os casacos do armário."
            }
           
        ]
    },
    {
        enunciado: "Quais são suas estações preferidas do ano?",
        alternativas: [
            {
                texto:"Primavera, verão.",
                afirmacao: "São as estações do ano que marcam o tempo de plantar e de colher, época de flores, favorável para atividades físicas ao ar livre."
            },
            {
                texto:  "Outono, inverno.",
                afirmacao:"Clima mais ameno e menor exposição á luz possibilitam descansos mais agradáveis e revigorantes."
            }
            
        ]
    },
    {
        enunciado: "Qual tipo de clima te agrada mais?",
        alternativas: [
            {
                texto:" O clima quente.",
                afirmacao:" Gosto de roupas leves, de tomar coisas geladas, de tomar um sol na praia..."
            },
            {
                texto: "O clima frio. ",
                afirmacao:"Prefiro usar muitas roupas e não suar a todo momento por conta do calor, gosto de ficar debaixo das cobertas e tomar um chocolate quente."
            }
          
        ]
    },
    {
        enunciado: " Se você não conhece a neve, gostaria de conhece-lá? ",
        alternativas: [
            {
                texto: "Sim, quero",
                afirmacao: "Apesar do frio ser extremo, é algo lindo que todos deviamos ter a oportunidade de apreciar "
            },
            {
                texto: "Não",
                afirmacao:" Eu não quero sair do conforto da minha casa quentinha, para ver um monte de gelo e congelar de tanto frio."
            }
           
        ]
    },
    

];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Futuramente..."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();
   