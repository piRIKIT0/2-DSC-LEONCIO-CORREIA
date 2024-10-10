const numero1 = document.querySelector('#numero1');
const numero2 = document.querySelector('#numero2'); 
const btnCalcular = document.querySelector('#btn-calcular'); 
//alert(numero1);
const resultado = document.querySelector('.resultado'); 
const adicao = document.querySelector('.adiçao'); 
const subtracao = document.querySelector('.subtraçao');
const divisao = document.querySelector('.divisao');
const multiplicacao = document.querySelector('.multiplicacao');

function calcular(){
  const n1 = Number(numero1.value)
  const n2 = Number (numero2.value)
  if (typeof n1 === 'number'
    && typeof n2 === 'number') {
        const adicao = 
    }
  alert(resultado)
}

btnCalcular.addEventListener('click', function(){
    calcular();
});