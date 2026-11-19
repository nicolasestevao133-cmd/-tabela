
const aplicativos = [
    {
        nome: "Instagram",
        categoria: "Rede Social"
    },
    {
        nome: "WhatsApp",
        categoria: "Comunicação"
    },
    {
        nome: "Spotify",
        categoria: "Música"
    },
    {
        nome: "Netflix",
        categoria: "Entretenimento"
    },
    {
        nome: "Minecraft",
        categoria: "Jogos"
    }
]

const formulario = document.getElementById("formAplicativo")
const campoNome = document.getElementById("nome")
const campoCategoria = document.getElementById("categoria")
const corpoTabela = document.getElementById("corpoTabela")

function exibir() {
    corpoTabela.innerHTML = "";

    for (let posicao = 0; posicao < aplicativos.length; posicao++) {

        const aplicativo = aplicativos[posicao]

        corpoTabela.innerHTML += `
            <tr>
                <td>${posicao + 1}</td>
                <td>${aplicativo.nome}</td>
                <td>${aplicativo.categoria}</td>
                <td>
                    <button class="btnExcluir" data-posicao="${posicao}">
                        Excluir
                    </button>
                </td>
            </tr>
        `
    }
}

exibir();

// Cadastrar aplicativo
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const aplicativo = {
        nome: campoNome.value,
        categoria: campoCategoria.value
    }

    aplicativos.push(aplicativo)

    exibir()

    formulario.reset()
})

// Excluir aplicativo com animação
corpoTabela.addEventListener("click", function(evento) {

    if (evento.target.classList.contains("btnExcluir")) {

        const posicao = Number(evento.target.dataset.posicao);

        const linha = evento.target.closest("tr");

        // Adiciona a animação
        linha.classList.add("desintegrando");

        // Aguarda a animação terminar
        setTimeout(function() {

            aplicativos.splice(posicao, 1);

            exibir();

        }, 650);

    }

});

