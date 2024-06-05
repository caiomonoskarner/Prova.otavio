document.addEventListener("DOMContentLoaded", function() {
    var adicionarAlunoBtn = document.getElementById("adicionarAlunoBtn");
    adicionarAlunoBtn.addEventListener("click", adicionarAluno);

    function adicionarAluno() {
        var matricula = document.getElementById("matricula").value;
        var nome = document.getElementById("nome").value;
        var nota1 = parseFloat(document.getElementById("nota1").value);
        var nota2 = parseFloat(document.getElementById("nota2").value);

        if (nota1 > 10 || nota2 > 10) {
            alert("As notas não podem ser maiores que 10.");
            return;
        }

        var tabela = document.getElementById("tabelaNotas").getElementsByTagName('tbody')[0];
        var novaLinha = tabela.insertRow(tabela.rows.length);
        var celulaMatricula = novaLinha.insertCell(0);
        var celulaNome = novaLinha.insertCell(1);
        var celulaNota1 = novaLinha.insertCell(2);
        var celulaNota2 = novaLinha.insertCell(3);
        var celulaMedia = novaLinha.insertCell(4);
        var celulaStatus = novaLinha.insertCell(5);

        celulaMatricula.innerHTML = matricula;
        celulaNome.innerHTML = nome;
        celulaNota1.innerHTML = nota1;
        celulaNota2.innerHTML = nota2;

        var media = (nota1 + nota2) / 2;
        celulaMedia.innerHTML = media.toFixed(2);

        if (media >= 5) {
            celulaStatus.innerHTML = "Aprovado";
            novaLinha.classList.add('aprovado'); // Adiciona a classe 'aprovado' à linha
        } else {
            celulaStatus.innerHTML = "Reprovado";
            novaLinha.classList.add('reprovado');
        }

        // Limpar o formulário após adicionar aluno
        document.getElementById("formNotas").reset();
    }
});
