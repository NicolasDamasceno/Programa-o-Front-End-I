let inputCorTexto = document.getElementById('cor-texto');
    let inputCorFundo = document.getElementById('cor-fundo');

    inputCorTexto.addEventListener('input', () => {
        let cor = inputCorTexto.value;
        document.body.style.color = cor;
    });

    inputCorFundo.addEventListener('input', () => {
        let cor = inputCorFundo.value;
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = cor;
    });