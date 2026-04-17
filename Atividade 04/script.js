function mudarCor() {
    var texto = document.getElementById("paragrafo1");
    texto.style.color = 'blue';
};

function mudarEstilo() {
    var lista = document.getElementsByTagName("li");
    
    for (var i = 0; i < lista.length; i++) {
        lista[i].style.fontWeight = 'bold'
    }
};

function contarPara() {
    var container = document.getElementById("div-cont");
    
    var qtd_para = container.getElementsByTagName("p");

    var divResul = document.getElementById("div-resul");

    divResul.innerHTML = "Total de Parágrafos: " + qtd_para.length
}

var botao = document.getElementById("botao");
botao.addEventListener("click", function(){
    let paragrafo = document.getElementById("paragrafo2");
    paragrafo.innerText = "O texto deste parágrafo foi alterado!";
});

var botao_limpar = document.getElementById("limpar");
botao_limpar.addEventListener("click", function() {
    let paragrafo = document.getElementById("paragrafo2");
    paragrafo.innerHTML = "Clique no botão abaixo para alterar o texto deste parágrafo:"
});

var copiar = document.getElementById("copiar");
copiar.addEventListener("click", function(){
    let texto = document.getElementById("texto-original");
    let destino = document.getElementById("copiado-mod");
    destino.textContent = texto.toUpperCase();
})