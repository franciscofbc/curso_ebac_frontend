const form = document.getElementById("form-deposito")
const nomeBeneficiario = document.getElementById("nome-beneficiario")
let formEValido = false

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(" ")
    return nomeComoArray.length >= 2
}

function limparForm(a, b, c) {
    a.value = ""
    b.value = ""
    c.value = ""
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const numeroConta = document.getElementById("numero-conta")
    const valorDeposito = document.getElementById("valor-deposito")
    const mensagemSucesso = `Valor de ${valorDeposito.value} depositado para ${nomeBeneficiario.value} com sucesso! Conta: ${numeroConta.value}`

    formEValido = validaNome(nomeBeneficiario.value)
    if (!formEValido) {
        //document.querySelector(".error-message").style.display = "block"
    } else {
        const containerMenssagemSucesso = document.querySelector(".sucess-message")
        containerMenssagemSucesso.innerHTML = mensagemSucesso
        containerMenssagemSucesso.style.display = "block"

        limparForm(nomeBeneficiario, numeroConta, valorDeposito)
    }
})

nomeBeneficiario.addEventListener("keyup", function (e) {
    formEValido = validaNome(e.target.value)
    if (!formEValido) {
        nomeBeneficiario.classList.add("error")
        document.querySelector(".error-message").style.display = "block"
    } else {
        nomeBeneficiario.classList.remove("error")
        document.querySelector(".error-message").style.display = "none"
    }
})