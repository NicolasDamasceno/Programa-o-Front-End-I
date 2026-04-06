document.addEventListener("DOMContentLoaded", () => {
    const corTexto = document.getElementById("cor-texto");
    const corFundo = document.getElementById("cor-fundo");

    if (corTexto) {
        corTexto.addEventListener("input", () => {
            document.body.style.color = corTexto.value;
        });
    }

    if (corFundo) {
        corFundo.addEventListener("input", () => {
            document.body.style.backgroundColor = corFundo.value;
        });
    }
});