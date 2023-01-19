$(document).ready(function () {
    /*$("form").on("submit", function (e) {
        e.preventDefault()

        const inputNomeTarefa = $("#nome-tarefa").val()
        const novaTarefa = $(`<li>${inputNomeTarefa}</li>`)

        $(novaTarefa).appendTo("ul")

        $("#nome-tarefa").val("")

        $("li").click(function () {
            $(this).addClass("riscado")
        })
    })*/
    $(".button-cadastrar").on("click", function (e) {

        e.preventDefault()

        const inputNomeTarefa = $("#nome-tarefa").val()
        const li = document.createElement('li')
        li.innerHTML = `${inputNomeTarefa}`
        $(li).appendTo("ul")

        $("#nome-tarefa").val("")

        $(li).click(function () {
            $(li).toggleClass('riscado')
        })

    })

})