$(document).ready(function () {
    $("#telefone").mask("(00) 00000-0000")

    $("form").validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                /* validacao customizada para o tipo email */
                email: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
          /*   nome: "Por favor, insira o seu nome",
            email: "Por favor, insira o seu e-mail",
            mensagem: "Por favor, insira uma mensagem" */
        }
    })
})