function exibirError(idElemento, mensagem) {
    let errorMessage = document.querySelector(idElemento);
    errorMessage.textContent = mensagem;
    errorMessage.classList.remove('oculto');
        
    setTimeout(function() {
        errorMessage.classList.add('oculto');
    }, 3000);

}

document.querySelector('#botaoErro').addEventListener('click', function(){
    exibirError('#mensagemErro', 'O campo deve ser preenchido');
});

document.querySelector('#botaoExibir').addEventListener('click', function(){
    exibirConteudo();
});

function exibirConteudo() {
    var conteudo = document.querySelector('#caixaDeTexto').value;
    if (conteudo === ""){
        exibirError("#mensagemErro", 'Insira um texto primeiro!');
        
    } else {
        var stringFinal = conteudo.trim();
        document.querySelector('#conteudo').innerHTML = stringFinal;

    }

};

document.querySelector('#botaoCalcular').addEventListener('click', function(){
    let numInteracoes = Number(document.querySelector("#qtdInteracoes").value);
    let numVisulizacao = Number(document.querySelector("#qtdVisualizacao").value);

    if (isNaN(numInteracoes) || isNaN(numVisulizacao)){
        exibirError("#mensagemErro", 'Insira apenas números!');
    } else {
        let taxa = (numInteracoes / numVisulizacao) * 100
        document.querySelector("#resultadoPor").textContent = taxa.toFixed(2) + "%";;
    }

});
