function exerc1() {
    let valor = prompt("Digite o valor: ");
    if(confirm("Deseja conferir o tipo de dado?")){
        if(typeof(valor) == 'string'){
            alert("O valor é uma string");
        }
        if(typeof(valor) == 'number'){
            alert("O valor é um número");
        }
        if(typeof(valor) == 'object'){
            alert("O valor digitado é um objeto")
        }
        if(typeof(valor) == 'undefined'){
            alert("O valor digitado não está definido");
        }
    }else{
        document.write("Obrigado por visitar essa página;");
    }
}

/*

*/