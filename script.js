document.getElementById("action").addEventListener("change", function () {
    let action = this.value;
    let inputSection = document.getElementById("inputSection");

    inputSection.innerHTML = "";

    if (action === "variaveis") {
        inputSection.innerHTML = `
            <p><strong>Exemplo de Variáveis:</strong> Preencha os campos abaixo para ver como variáveis funcionam em JavaScript.</p>
            <label for="nome">Nome: <small>(Uma variável para armazenar seu nome)</small></label>
            <input type="text" id="nome" placeholder="Digite um nome">
            <br>
            <label for="idade">Idade: <small>(Uma variável numérica para sua idade)</small></label>
            <input type="number" id="idade" placeholder="Digite a idade">
            <br>
            <label for="pi">Valor de PI: <small>(Constante representando o valor de PI)</small></label>
            <input type="text" id="pi" value="3.14" disabled>
        `;
    } else if (action === "objeto") {
        inputSection.innerHTML = `
            <p><strong>Exemplo de Objetos:</strong> Preencha os campos abaixo para criar um objeto com atributos e métodos.</p>
            <label for="nomeAluno">Nome do Aluno: <small>(Atributo nome do objeto aluno)</small></label>
            <input type="text" id="nomeAluno" placeholder="Digite o nome do aluno">
            <br>
            <label for="curso">Curso: <small>(Atributo curso do objeto aluno)</small></label>
            <input type="text" id="curso" placeholder="Digite o curso">
        `;
    } else if (action === "decisao") {
        inputSection.innerHTML = `
            <p><strong>Exemplo de Decisão:</strong> Insira sua idade para verificar se você é maior de idade (usando if/else).</p>
            <label for="idadeDecisao">Idade: <small>(Uma variável para verificar se você é maior de idade)</small></label>
            <input type="number" id="idadeDecisao" placeholder="Digite a idade para verificar maioridade"><img src= "imagens/if_else.png">
        `;
    } else if (action === "lacos") {
        inputSection.innerHTML = `
            <p><strong>Exemplo de Laços de Repetição:</strong> Defina quantas vezes o laço for deverá repetir.</p>
            <label for="vezes">Número de Repetições: <small>(Número de vezes que o laço for irá repetir)</small></label>
            <input type="number" id="vezes" placeholder="Digite o número de vezes para repetir">
        `;
    }
});

document.getElementById("testForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let action = document.getElementById("action").value;
    let output = document.getElementById("output");

    if (action === "variaveis") {
        let nome = document.getElementById("nome").value || "Nome padrão";
        let idade = document.getElementById("idade").value || 25;
        const PI = 3.14;

        output.innerHTML = `
            Exemplo de variáveis:<br>
            Nome: ${nome}, Idade: ${idade}, PI: ${PI}
        `;
    } else if (action === "objeto") {
        let nomeAluno = document.getElementById("nomeAluno").value || "Aluno Padrão";
        let curso = document.getElementById("curso").value || "Curso Padrão";

        const aluno = {
            nome: nomeAluno,
            curso: curso,
            apresentar: function () {
                return `Meu nome é ${this.nome} e eu estudo ${this.curso}.`;
            }
        };

        output.innerHTML = `
            Exemplo de objeto:<br>
            ${aluno.apresentar()}
        `;
    } else if (action === "decisao") {
        let idadeDecisao = document.getElementById("idadeDecisao").value || 0;

        if (idadeDecisao >= 18) {
            output.innerHTML = "Você é maior de idade.";
        } else {
            output.innerHTML = "Você é menor de idade.";
        }
    } else if (action === "lacos") {
        let vezes = document.getElementById("vezes").value || 5;
        let resultado = "";

        for (let i = 0; i < vezes; i++) {
            resultado += `Contagem: ${i+1}<br>`;
        }

        output.innerHTML = resultado;
    }
});
