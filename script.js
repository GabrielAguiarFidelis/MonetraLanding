function trocarTela(e, tipo) {
  const img = document.getElementById("tela");
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach((t) => t.classList.remove("active"));
  e.target.classList.add("active");

  if (tipo === "dashboard") img.src = "img/Dashboard.jpg";
  if (tipo === "ganhos") img.src = "img/Ganhos.png";
  if (tipo === "gastos") img.src = "img/Gastos.png";
}

const botoes = document.querySelectorAll(".escolher");

const modal = document.getElementById("modalPlano");
const texto = document.getElementById("planoEscolhidoTexto");
const fechar = document.querySelector(".close");
const confirmar = document.getElementById("confirmarPlano");

let planoSelecionado = "";

botoes.forEach((botao) => {
  botao.addEventListener("click", (e) => {
    e.preventDefault();

    planoSelecionado = botao.getAttribute("data-plano");

    // salva
    localStorage.setItem("planoEscolhido", planoSelecionado);

    // texto no popup
    texto.innerText = `Você escolheu o plano ${planoSelecionado.toUpperCase()}`;

    // abre modal
    modal.classList.add("show de bola");
  });
});

/* FECHAR */
fechar.onclick = () => modal.classList.remove("show");

/* CONTINUAR */
confirmar.onclick = () => {
  modal.classList.remove("show");

  // remove seleção anterior
  document.querySelectorAll(".plano").forEach((p) => {
    p.classList.remove("ativo");
  });

  // encontra o plano escolhido
  const planoElemento = document
    .querySelector(`.escolher[data-plano="${planoSelecionado}"]`)
    .closest(".plano");

  // adiciona destaque verde
  planoElemento.classList.add("ativo");
};

/* clicar fora */
window.onclick = (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
};
