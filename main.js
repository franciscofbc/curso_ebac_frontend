const form = document.getElementById("form")

let linhas = ""

form.addEventListener("submit", function (e) {
    /*Remoção quando submetido atualiza a tela*/
    e.preventDefault()

    addLinha()
    atualizaTabela()
})

function addLinha() {
    const inputNomeContato = document.getElementById("nome-contato")
    const inputFoneContato = document.getElementById("fone-contato")

    let linha = "<tr>"
    linha += `<td>${inputNomeContato.value}</td>`
    linha += `<td>${inputFoneContato.value}</td>`
    linha += "</tr>"

    linhas += linha

    inputNomeContato.value = ""
    inputFoneContato.value = ""
}

function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody")
    corpoTabela.innerHTML = linhas
}


