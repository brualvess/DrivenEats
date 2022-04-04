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
  console.log("amor");
  let fraseWhats = "Olá, gostaria de fazer o pedido:\n";

  let total = 0;

  const selecionado = document.querySelectorAll(".selecionado");
  for (let i = 0; i < selecionado.length; i++) {
    let escolhido = selecionado[i];
    
    const preco = escolhido.querySelector(".preco");
    let soma = preco.innerText.replace(",", ".").replace("R$ ", "");
    total += Number(soma);
  }
  const prato = selecionado[0].querySelector(".nome");
  fraseWhats = fraseWhats + "- Prato: " + prato.innerText + "\n";
  const bebida = selecionado[1].querySelector(".nome");
  fraseWhats = fraseWhats + "- Bebida: " + bebida.innerText + "\n";
  const sobremesa = selecionado[2].querySelector(".nome");
  fraseWhats = fraseWhats + "- Sobremesa: " + sobremesa.innerText + "\n";
  let precoFinal = "Total: " + " R$ " + total.toFixed(2).replace(".", ",");
  fraseWhats = fraseWhats + precoFinal;
  let fraseFinal = encodeURIComponent(fraseWhats);
  window.open("https://wa.me/+5561995241641?text=" + fraseFinal);
}
