const form = document.getElementById("form-atividade")
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji aprovado">'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji reprovado>"'
const atividades = []
const notas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt("Digite a nota mínima:"))

let linhas = ""

form.addEventListener("submit", function (e) {
    /*Remoção quando submetido atualiza a tela*/
    e.preventDefault()

    addLinha()
    atualizaTabela()
    atualizaMediaFinal()

})

function addLinha() {
    const inputNomeAtividade = document.getElementById("nome-atividade")
    const inputNotaAtividade = document.getElementById("nota-atividade")

    if (atividades.includes(inputNomeAtividade.value)) {
        alert("ja inserida")
    } else {
        atividades.push(inputNomeAtividade.value)
        notas.push(parseFloat(inputNotaAtividade.value))

        let linha = "<tr>"
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        /*Operador ternário*/
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += "</tr>"

        linhas += linha
    }

    inputNomeAtividade.value = ""
    inputNotaAtividade.value = ""
    /*alert(`Atividade: ${inputNomeAtividade.value}. Nota: ${inputNotaAtividade.value}`)*/
}

function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody")
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal()
    document.getElementById("media-final-valor").innerHTML = mediaFinal.toFixed(2)
    document.getElementById("media-final-resultado").innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
}

function calculaMediaFinal() {
    let somaDasNotas = 0

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length
}