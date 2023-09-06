class Pessoa {
    constructor(nome, sobrenome, email, data_nascimento, matricula) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.data_nascimento = data_nascimento;
        this.matricula = matricula;
    }
}

class Aluno extends Pessoa {
    constructor(nome, sobrenome, email, data_nascimento, matricula, curso) {
        super(nome, sobrenome, email, data_nascimento, matricula);
        this.curso = curso;
    }
    listarDados() {
        return {
            Nome: this.nome,
            Sobrenome: this.sobrenome,
            Email: this.email,
            Data_de_Nascimento: this.data_nascimento,
            Matricula: this.matricula,
            Curso: this.curso,
        };
    }
}

class Professor extends Pessoa {
    constructor(nome, sobrenome, email, data_nascimento, matricula, area_atuacao, link_lattes) {
        super(nome, sobrenome, email, data_nascimento, matricula);
        this.area_atuacao = area_atuacao;
        this.link_lattes = link_lattes;
    }
    listarDados() {
        return {
            Nome: this.nome,
            Sobrenome: this.sobrenome,
            Email: this.email,
            Data_de_Nascimento: this.data_nascimento,
            Matricula: this.matricula,
            Área_de_Atuacao: this.area_atuacao,
            Link_Lattes: this.link_lattes,
        };
    }
}

function mostrarDados() {
    let nome = document.querySelector("#nome").value;
    let sobrenome = document.querySelector("#sobrenome").value;
    let email = document.querySelector("#email").value;
    let dtNasc = document.querySelector("#dtNasc").value;
    let matricula = document.querySelector("#matricula").value;
    const op1 = document.querySelector("#Professor");
    const op2 = document.querySelector("#Aluno");

    let pr; // Declare a variável pr aqui para evitar problemas de escopo

    if (op1.checked) {
        let area = document.querySelector("#area").value;
        let lattes = document.querySelector("#lattes").value;
        pr = new Professor(nome, sobrenome, email, dtNasc, matricula, area, lattes);
    }

    if (op2.checked) {
        let curso = document.querySelector("#curso").value;
        pr = new Aluno(nome, sobrenome, email, dtNasc, matricula, curso);
    }

    let outputElement = document.getElementById("output");

    outputElement.innerHTML = ""; // Limpa o conteúdo anterior

    if (pr) {
        let dados = pr.listarDados();
        for (let key in dados) {
            if (dados.hasOwnProperty(key)) {
                let ar = key + " : " + dados[key];
                let p = document.createElement("p");
                p.textContent = ar;
                outputElement.appendChild(p);
                p.style.width = "230px";
            }
        }
    }
}



function showDiv(elem) {
    document.getElementById('prof').style.display = elem.value === "Professor" ? "block" : "none";
    document.getElementById('al').style.display = elem.value === "Aluno" ? "block" : "none";
}
