function escolherBurguer(elemento) {
  const burguer = document.getElementById("burguer");
  const hamburguer = document.getElementById("hamburguer");
  const burgao = document.getElementById("burgao");
  burguer.classList.remove("selecionado");
  hamburguer.classList.remove("selecionado");
  burgao.classList.remove("selecionado");
  elemento.classList.toggle("selecionado");
  verificarItens();
}
function escolherBebida(elemento) {
  const coca = document.getElementById("coca");
  const guarana = document.getElementById("guarana");
  const fanta = document.getElementById("fanta");
  coca.classList.remove("selecionado");
  guarana.classList.remove("selecionado");
  fanta.classList.remove("selecionado");
  elemento.classList.toggle("selecionado");
  verificarItens();
}
function escolherSobremesa(elemento) {
  const cake = document.getElementById("cake");
  const pudim = document.getElementById("pudim");
  const sundae = document.getElementById("sundae");
  cake.classList.remove("selecionado");
  pudim.classList.remove("selecionado");
  sundae.classList.remove("selecionado");
  elemento.classList.toggle("selecionado");
  verificarItens();
}
function verificarItens() {
  let quantidade = document.querySelectorAll(".selecionado").length;
  if (quantidade == 3) {
    const elemento = document.querySelector(".finalizarPedido");
    elemento.innerText = "Fechar pedido";
    elemento.classList.add("fecharPedido");
    const botaoVerde = document.querySelector(".finalizar");
    botaoVerde.classList.add("finish");
  }
}
function pedirPedido() {
  console.log("amor")
}
