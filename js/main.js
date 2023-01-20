$(document).ready(function () {

    /* id # */
    $("#carousel-imagens").slick({ autoplay: true });

    /* class . */
    $(".menu-hamburguer").click(
        function () {
            $("nav").slideToggle()
        })

    $("#telefone").mask("(00) 00000-0000")
    /* , {placeholder: "(__) _____-____"}) */
    /* letra=S */

    $("form").validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            }
        },
        messages: {
            nome: "Por favor, insira o seu nome"
        },
        /* submetido com sucesso */
        submitHandler: function (form) {
            console.log(form)
        },
        /* algum erro ao submeter */
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $(".lista-veiculos button").click(function () {
        const destino = $("#contato")

        /*acessamos o pai do button
        procuramos itens dentro do li, pai do button */
        const nomeVeiculo = $(this).parent().find("h3").text()
        $("#veiculo-interesse").val(nomeVeiculo)

        $("html").animate({ scrollTop: destino.offset().top }, 1000)
    })

})