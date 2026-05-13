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

}

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

document.querySelector('#botaoCarregar').addEventListener('click', function(){
    var uploadInput = document.querySelector('#uploadImagem');
    var resultadoDiv = document.querySelector('#resultado');

    var arquivoSelecionado = uploadInput.files[0];

    if (arquivoSelecionado) {
        var img = document.createElement('img');
        img.src = URL.createObjectURL(arquivoSelecionado);
        img.style.width = '300px';

        resultadoDiv.innerHTML= '';
        resultadoDiv.appendChild(img);

    } else {
        exibirError('#mensagemError',"Selecione uma imagem primeiro!" )
    }
});


const seletor = document.querySelector('#seletorImagens');
const container = document.querySelector('#resultadoImagem');

seletor.addEventListener('change', function(){
    let urlSelecionada = seletor.value;

    container.innerHTML = '';
    if(urlSelecionada !== ""){
        let novaImg = document.createElement('img');
    
        novaImg.src = urlSelecionada;
        novaImg.alt = 'Imagem selecionada';
        
        container.appendChild(novaImg);
    }
});

document.querySelector('#enviarBtn').addEventListener('click', function(){
    let checkboxes = document.getElementsByName('redesSocias');
    var selecionadas = [];
    let resultadoDiv = document.querySelector('#redesSelecionadas');

    for (var i = 0; i < checkboxes.length; i++){
        if (checkboxes[i].checked){
            selecionadas.push(checkboxes[i].value);
        };
    };

    if (selecionadas.length === 0){
        exibirError('#mensagemErro', "Marque uma alternativa primeiro")
        resultadoDiv.innerHTML = '';
    } else {
        alert("Marcados: " + selecionadas.join(', '));
        resultadoDiv.innerHTML = "Redes selecionadas: " + selecionadas.join(", ")
    };

});

document.querySelector('#botaoAdicionar').addEventListener('click', function(){
    let hashtagInput = document.querySelector('#hashtagUser');
    let seletorHash = document.querySelector("#hashtagCriadas");

    let textoHashtag = hashtagInput.value.trim();

    if (textoHashtag !== ""){
        let hashtagExistentes = Array.from(seletorHash.options);

        let jaExiste = hashtagExistentes.some(function(opcao){
            return opcao.text.toLowerCase() === textoHashtag.toLowerCase();
        })
        
        if (jaExiste){
            exibirError('#mensagemErro', "Hashtag já criada!");
        } else {
            if (textoHashtag.length < 2){
                exibirError('#mensagemErro', "Hashtag com menos de 2 caracteres!");
            } else{
                let novaHashatg = document.createElement('option');
                novaHashatg.text = textoHashtag;
                novaHashatg.value = textoHashtag;


                seletorHash.appendChild(novaHashatg);
                hashtagInput.value = "";
                hashtagInput.focus();
            }
        }
        
    } else {

        exibirError("#mensagemErro", "Insira uma Hashtag primeiro!");
    };
});

document.querySelector("#botaoRemover").addEventListener('click', function(){
    let hashtagList = document.querySelector('#hashtagCriadas');
    let hashtagSelecionadas = Array.from(hashtagList.selectedOptions);

    if (hashtagSelecionadas.length > 0){
        hashtagSelecionadas.forEach(function(opcao){
            if (opcao.id !== "hashtagPrinc"){
                hashtagList.removeChild(opcao);
            }
        })
    } else {
        exibirError("#mensagemErro", "Selecione uma Hashtag primeiro!");
    }

})

const selectDisponiveis = document.querySelector('#ativosDisponiveis');
const selectCarteira = document.querySelector('#carteiraInvestimentos');
const btnDireita = document.querySelector('#moverParaDireitaBtn');
const btnEsquerda = document.querySelector('#moverParaEsquerdaBtn');

function moverAtivos(origem, destino){
    let selecionados = Array.from(origem.selectedOptions);

    if (selecionados.length === 0){
        exibirError("#mensagemErro", "Insira um ativo primeiro!");
    } else {
        selecionados.forEach(opcao => {
            destino.appendChild(opcao);
        })
        atualizarBotoes();
    }
}

function atualizarBotoes() {
    btnDireita.disabled = selectDisponiveis.options.length === 0;
    btnEsquerda.disabled = selectCarteira.options.length === 0;
}

btnDireita.addEventListener('click', function(){
    moverAtivos(selectDisponiveis, selectCarteira);
});

btnEsquerda.addEventListener('click', function(){
    moverAtivos(selectCarteira, selectDisponiveis);
})

atualizarBotoes();