function Pessoa(){
    var nome;
    var sobrenome;
    var email;
    var data_nascimento;
    var matricula;
    nomeCompleto();

    this.setNome = function(vNome){
        this.nome = vNome;
    }
    this.getNome = function(){
        return this.nome;
    }

    this.setSobrenome = function(vSobrenome){
        this.sobrenome = vSobrenome;
    }
    this.getSobrenome = function(){
        return this.sobrenome;
    }

    this.setEmail = function(vEmail){
        this.email = vEmail;
    }
    this.getEmail = function(){
        return this.email;
    }
    this.setDataNasc = function(vDatanasc){
        this.data_nascimento = vDatanasc;
    }
    this.getDataNasc = function(){
        return this.data_nascimento;
    }

    this.setMatricula = function(vMatricula){
        this.matricula = vMatricula;
    }
    this.getMatricula = function(){
        return this.matricula;
    }



    function nomeCompleto(){
        return this.nome + " " + this.sobrenome;
    }
}

function Curso(){
    var curso;
    this.setCurso = function(vCurso){
        this.curso = vCurso;
    }
    this.getCurso = function(){
        return this.curso;
    }
}

function Professor(){
    var area_atuacao;
    var link_lattes;

    this.setAreaAtuacao = function(vArea){
        this.area_atuacao = vArea;
    }
    this.getAreaAtuacao = function(){
        return this.area_atuacao;
    }

    this.setLinkLattes = function(vLinkLattes){
        this.link_lattes = vLinkLattes;
    }
    this.getLinkLattes = function(){
        return this.link_lattes;
    }
}

