function exerc1() {
    let valor = prompt("Digite o valor: ");
    if(confirm("Deseja conferir o tipo de dado?")){
        if(typeof valor === "number"){
            alert("O valor é um numero");
        }
        if(typeof valor === "string"){
            alert("O valor é uma string");
        }
        if(typeof valor === "object"){
            alert("O valor digitado é um objeto")
        }
        if(typeof valor === "undefined"){
            alert("O valor digitado não está definido");
        }
    }else{
        document.write("Obrigado por visitar essa página;");
    }
}

function par(){
	let numero = prompt("Digite um valor inteiro");
	if (numero%2 == 1){
		alert("Impar");
	}
	else  {
		alert("Par");
	}
}

function primo(){
	let num = prompt("Primo = Digite um valor inteiro: ");
	for(let i = 2; i <= num; i++){
		if (num % i == 0){
			alert("não é primo");
			break;
		}else {
			alert("É primo");
			break;
		}
	}
		
}

/*

*/