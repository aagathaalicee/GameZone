  const botoes = document.querySelectorAll(".card button");

 const modal = document.getElementById("modal");
 const fechar = document.getElementById("fechar");

 const modalTitulo = document.getElementById("modal-titulo");
 const modalTexto = document.getElementById("modal-texto");

 if (modal && fechar) {

 botoes.forEach((botao) => {

    botao.addEventListener("click", () => {

        const card = botao.parentElement;

        const titulo = card.querySelector("h3").textContent;
        const texto = card.querySelector("p").textContent;

        modalTitulo.textContent = titulo;
        modalTexto.textContent = texto;

        modal.style.display = "flex";
    });

});

 fechar.addEventListener("click", () => {
    modal.style.display = "none";
});

 window.addEventListener("click", (evento) => {
    if (evento.target === modal) {
        modal.style.display = "none";
    }
});

}
 const formulario = document.querySelector("form");

 if (formulario) {
  formulario.addEventListener("submit", function(evento)  
 {
    evento.preventDefault();

    const email = document.getElementById("email").value;

    if (!email.includes("@")) {
        alert("Digite um e-mail válido!");
        return;
    }

    alert("Mensagem enviada com sucesso!");

    formulario.reset();
});
}
