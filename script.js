function trocarTela(e, tipo) {
  const img = document.getElementById("tela");
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach((t) => t.classList.remove("active"));
  e.target.classList.add("active");

  if (tipo === "dashboard") img.src = "img/Dashboard1.jpg";
  if (tipo === "ganhos") img.src = "img/Ganhos.jpg";
  if (tipo === "gastos") img.src = "img/Gastos.jpg";
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
    modal.classList.add("show");
  });
});

/* FECHAR */
fechar.onclick = () => modal.classList.remove("show");

/* CONTINUAR */
confirmar.onclick = () => {
  modal.classList.remove("show");
  location.href = "";

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

/* SCROLL REVEAL */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1800,
  delay: 200,
  reset: false,
});

sr.reveal('.home__subtitle', { delay: 200 });
sr.reveal('.home__title', { delay: 220 });
sr.reveal('.home__description', { delay: 500 });
sr.reveal('.buttons', { delay: 600 });
sr.reveal('.social-proof', { delay: 700 });
sr.reveal('.hero-image', { delay: 700 });
sr.reveal('.tag', { delay: 200 });

sr.reveal(".problema .card", { delay: 200 });
sr.reveal(".problema-grid .card", { delay: 200 });

sr.reveal(".solucao .card", { delay: 200 });
sr.reveal(".solucao-grid .card", { delay: 200 });

sr.reveal(".demo .tag", { delay: 200 });
sr.reveal(".demo h2", { delay: 220 });
sr.reveal(".demo p", { delay: 400 });
sr.reveal(".demo .tabs", { delay: 300 });
sr.reveal(".demo .phone", { delay: 200 });

sr.reveal(".beneficios .card", { delay: 200 });
sr.reveal(".beneficios-grid .card", { delay: 200 });

sr.reveal(".planos h2", { delay: 200 });
sr.reveal(".planos p", { delay: 300 });
sr.reveal(".planos", { delay: 200 });