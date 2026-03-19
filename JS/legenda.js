// Seleciona o container do gráfico

export function gerarLegenda(texto) {
  const legenda = document.createElement("p");
  legenda.textContent = texto;
  document.body.appendChild(legenda);
}

const svg = d3.select("svg");

// Cria a legenda inicial abaixo do gráfico
const legenda = d3.select("body")
  .append("div")
  .attr("id", "legenda")
  .style("margin-top", "10px")
  .style("font-weight", "bold")
  .text("Este gráfico mostra a média de vendas diárias por tipo de pastel.");

// Função para atualizar a legenda
function atualizarLegenda(texto) {
  d3.select("#legenda").text(texto);
}

// Exemplo de eventos nos botões
document.getElementById("btnCrescente").addEventListener("click", () => {
  // lógica de ordenação crescente...
  atualizarLegenda("Gráfico ordenado em ordem crescente de vendas.");
});

document.getElementById("btnDecrescente").addEventListener("click", () => {
  // lógica de ordenação decrescente...
  atualizarLegenda("Gráfico ordenado em ordem decrescente de vendas.");
});

document.getElementById("btnAlfabetica").addEventListener("click", () => {
  // lógica de ordenação alfabética...
  atualizarLegenda("Gráfico ordenado em ordem alfabética dos tipos de pastéis.");
});
