class calculadora {
	constructor(notas){
        this.notas = notas
    }

  media() {
  	let valores = this.notas;
    let media = 0;
		let c = 0;
    let soma = 0;
   
    for (c = 0; c < valores.length; c++) {
      soma += valores[c];
    }



    media = soma / valores.length;

    return media
  }

  aprovacao(){
  	let valor = this.media()
  	if(valor>=60){
    	return "Aprovado"
    }
    else{
    	return "Reprovado"
    }
  }
}


// Função Recursivas

function contagemRegressiva(numero){
    console.log(numero);  
    
    let proximoNumero = numero - 1;
    if(proximoNumero > 0)
        contagemRegressiva(proximoNumero);
}
// contagemRegressiva(50);
/* 
 * Formulário envio de dados para cálculo da média 
 */
const formulario1 = document.getElementById('formulario-01');

if(formulario1)
    formulario1.addEventListener('submit', function( evento ){
@@ -145,9 +149,9 @@ function validaEmail(elemento){
}


let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let camposEmail = document.querySelectorAll('input.email');

for( let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}
for( let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}
for( let emFoco of camposEmail) {
    validaEmail(emFoco);
}
