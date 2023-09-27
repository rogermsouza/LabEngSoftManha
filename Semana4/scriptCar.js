class Carro {
    constructor(marca, modelo, ano, cor, km, vlrFipe, anoAtual) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.km = km;
        this.vlrFipe = vlrFipe;
        this.anoAtual = anoAtual;
    }

    anosUso() {
        return this.anoAtual - this.ano;
    }

    valorMercado() {
        let valor = this.vlrFipe;

        if (this.km < 30000) {
            valor = (valor * 1.10);
        } else if(this.km > 30000 && this.km < 50000) {
            valor = this.vlrFipe;
        } else if(this.km > 50000){
            valor = valor / 1.1;
        }

        return valor;
    }

    exibeDados() {
        const valorMercado = this.valorMercado();
        const valorFormatado = typeof valorMercado === 'number' ? valorMercado.toFixed(2) : valorMercado;
        return {
            marca: this.marca,
            modelo: this.modelo,
            ano: this.ano,
            km: this.km,
            vlrFipe: this.vlrFipe,
            cor: this.cor,
            anosUso: this.anosUso(),
            Valor_de_mercado: valorFormatado
        }
    }
}

function ProcessaFipe() {
    var car = document.querySelector("#consultaFipe");
    var marca = document.querySelector("#marca").value;
    var modelo = document.querySelector("#modelo").value;
    var ano = document.querySelector("#ano").value;
    var cor = document.querySelector("#cor").value;
    var km = document.querySelector("#km").value;
    var vlrFipe = document.querySelector("#vlrFipe").value;
    var anoAtual = document.querySelector("#anoAtual").value;
    var carro = new Carro(marca, modelo, ano, cor, km, vlrFipe, anoAtual);

    for (let i in carro.exibeDados()) {
        var conteudo = i + " : " + carro.exibeDados()[i];
        var inner = document.createTextNode(conteudo);
        var par = document.createElement('p');

        par.appendChild(inner);
        car.appendChild(par);
        par.setAttribute("style", "width: 300px");
    }
}
