const form = document.getElementById("form")
const valorA = document.getElementById("valor-a")
const valorB = document.getElementById("valor-b")
const mensagemSucesso = "Parabéns! Seu formulário foi submetido com sucesso"
const mensagemInsucesso = "Formulário inválido. O Valor B deve ser maior que o Valor A"
const containerMensagemSucesso = document.querySelector(".sucess-message")
const containerMensagemInsucesso = document.querySelector(".error-message")

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (parseInt(valorA.value) >= parseInt(valorB.value)) {
        containerMensagemInsucesso.innerHTML = mensagemInsucesso
        containerMensagemInsucesso.style.display = "block"
        containerMensagemSucesso.style.display = "none"
        limparForm(valorA, valorB)
    } else {
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = "block"
        containerMensagemInsucesso.style.display = "none"
        limparForm(valorA, valorB)
    }
})

function limparForm(a, b) {
    a.value = ""
    b.value = ""

}