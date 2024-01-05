"use strict";

let horas = 0;
let minutos = 0;
let segundos = 0;
let milisegundos = 0;

let cron;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();

function start() {
    pause();
    cron = setInterval(() => { timer(); }, 10);
  }
  
  function pause() {
    clearInterval(cron);
  }
  
  function reset() {
    horas = 0;
    minutos = 0;
    segundos = 0;
    milisegundos = 0;
    document.getElementById('horas').innerText = '00';
    document.getElementById('minutos').innerText = '00';
    document.getElementById('segundos').innerText = '00';
    document.getElementById('milisegundos').innerText = '000';
  }
  function timer() {
    if ((milisegundos += 10) == 1000) {
      milisegundos = 0;
      segundos++;
    }
    if (segundos == 60) {
      segundos = 0;
      minutos++;
    }
    if (minutos == 60) {
      minutos = 0;
      horas++;
    }
    document.getElementById('horas').innerText = returnData(horas);
    document.getElementById('minutos').innerText = returnData(minutos);
    document.getElementById('segundos').innerText = returnData(segundos);
    document.getElementById('milisegundos').innerText = returnData(milisegundos);
  }
  
  function returnData(input) {
    return input > 10 ? input : `0${input}`
  }
  function teste(){
    var numero = parseFloat(document.getElementById('numero').value)
    console.log(Number(numero))
    if(numero > 0){
        document.getElementById('pontos').innerHTML = numero * 2 

    }
    if(numero == 0){
        document.getElementById('pontos').innerHTML = numero
    }  

  }

  function passage(){
    var numeros = parseInt(document.getElementById('passagem').value)
    console.log(Number(numeros))
    if(numeros > 0){
        document.getElementById('adversario').innerHTML = numeros * 2 

    }
    if(numeros == 0){
        document.getElementById('adversario').innerHTML = numeros
    }
  }