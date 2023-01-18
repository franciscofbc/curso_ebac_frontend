/*Tudo o que precisarmos do jQuery devemos colocar dentro deste campo*/
$(document).ready(function () {
    /*console.log(document.querySelector("header button"))*/
    /*Forma que selecionamos elementos HTML atraves do jQuery. Podemos colocar qualquer tipo de seletor*/
    /*console.log($("header button"))*/

    /*Função chamando outra função (callback)*/
    /*document.querySelector("header button").addEventListener("click", function () { })*/

    /*Callback*/
    /*$("header button").click(function () {
        alert("Teste")
    })*/

    $("header button").click(function () {
        /*exibir form*/
        $("form").slideDown()
    })

    $("#botao-cancelar").click(function () {
        $("form").slideUp()
    })

    $("form").on("submit", function (e) {
        /*sem submit ao clicar no button*/
        e.preventDefault()

        const enderecoDaNovaImagem = $("#endereco-imagem-nova").val()
        const novoItem = $('<li style="display: none;"></li>')
        $(`<img src="${enderecoDaNovaImagem}"</img>`).appendTo(novoItem)
        $(`<div class="overlay-imagem-link"><a href="${enderecoDaNovaImagem}" title="Ver imagem em tamanho real"
target="_blank"> Ver imagem em tamanho real</a></div>`).appendTo(novoItem)
        $(novoItem).appendTo("ul")
        $(novoItem).fadeIn(1000)

        $("#endereco-imagem-nova").val("")
    })
})