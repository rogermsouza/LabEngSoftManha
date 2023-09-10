// Definição das classes Pessoa, Aluno e Professor
class Pessoa {
  constructor(nome, sobrenome, email, data_nascimento, matricula) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.data_nascimento = data_nascimento;
    this.matricula = matricula;
  }

  nomeCompleto() {
    return this.nome + " " + this.sobrenome;
  }
}

class Aluno extends Pessoa {
  constructor(nome, sobrenome, email, data_nascimento, matricula, curso) {
    super(nome, sobrenome, email, data_nascimento, matricula);
    this.curso = curso;
  }
}

class Professor extends Pessoa {
  constructor(nome, sobrenome, email, data_nascimento, matricula, area_atuacao, link_lattes) {
    super(nome, sobrenome, email, data_nascimento, matricula);
    this.area_atuacao = area_atuacao;
    this.link_lattes = link_lattes;
  }
}

// Código que cria instâncias de Aluno e Professor e exibe informações
document.addEventListener("DOMContentLoaded", function () {
  const meuForm = document.getElementById("Fcadastro");

  meuForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita a recarga da página

    // Obtenha os valores dos campos do formulário
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const email = document.getElementById("email").value;
    const data_nascimento = document.getElementById("data_nascimento").value;
    const matricula = document.getElementById("matricula").value;

    const curso = document.getElementById("curso").value;
    const area_atuacao = document.getElementById("area_atuacao").value;
    const link_lattes = document.getElementById("link_lattes").value;

    if (curso) {
      const aluno = new Aluno(nome, sobrenome, email, data_nascimento, matricula, curso);
      mostrarInformacoes(aluno);
    } else {
      const professor = new Professor(nome, sobrenome, email, data_nascimento, matricula, area_atuacao, link_lattes);
      mostrarInformacoes(professor);
    }

    function mostrarInformacoes(objeto) {
      // Exiba as informações na página
      const resultado = document.getElementById("output");
      resultado.innerHTML = `<p>Nome Completo: ${objeto.nomeCompleto()}</p><p>Email: ${objeto.email}</p>`;
  
      // Verifique se é Aluno ou Professor
      if (objeto instanceof Aluno) {
        resultado.innerHTML += `<p>Curso: ${objeto.curso}</p><p>Matricula: ${objeto.matricula}</p>`;
      } else if (objeto instanceof Professor) {
        resultado.innerHTML += `<p>Matricula: ${objeto.matricula}</p><p>Área de Atuação: ${objeto.area_atuacao}</p><p>Link Lattes: ${objeto.link_lattes}</p>`;
      }
    }
  });
});



function showDiv(elem) {
  document.getElementById('prof').style.display = elem.value === "Professor" ? "block" : "none";
  document.getElementById('al').style.display = elem.value === "Aluno" ? "block" : "none";
}
