function exerc1() {
    let valor = prompt("Digite o valor: ");
    if(confirm("Deseja conferir o tipo de dado?")){
        if(isNaN(valor)){
            alert("O valor é uma string");
        }else{
		 alert("O valor é um numero");
	}
} else {
	    alert("Obrigado por visitar essa página");
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

function fatorial() {
let num = prompt("Digite um valor inteiro: ");
  var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
    alert(result);
}



/*

*/
