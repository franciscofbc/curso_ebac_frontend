$(document).ready(function () {
    $("form").on("submit", function (e) {
        e.preventDefault()

        const inputNomeTarefa = $("#nome-tarefa").val()
        const novaTarefa = $(`<li>${inputNomeTarefa}</li>`)

        $(novaTarefa).appendTo("ul")

        $("#nome-tarefa").val("")

        $("li").click(function () {
            /*const teste = document.getElementsByClassName("riscado")
            console.log(teste)*/

            $(this).addClass("riscado")
        })
    })
})