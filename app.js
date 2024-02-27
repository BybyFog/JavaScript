let titulo = document.squerySelector('h1');
titulo.innerHTML = 'Hora do desafio';


function botaoFoiClicado(){
    console.log('O botão foi clicado');
}

function alerta(){
    alert('eu amo js');
}
  


 function cidadeDoBrasil(){  

   let cidade = prompt('Diga o nome de uma cidade do Brasil:');

    alert (`Estive em ${cidade} e lembrei de você`);
    
 }

 function soma(){ 
 let numero1 = prompt('ponha aqui o primeiro número');
 let numero2 = prompt('ponha aqui o segundo número');
  
  let resultado = parseInt(numero1) + parseInt(numero2) ;
  alert (resultado);


 }