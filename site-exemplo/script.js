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
  function placar(){
    var quatro = Number(document.getElementById('quatro').value)
    var tres = Number(document.getElementById('tres').value)
    var dois = Number(document.getElementById('dois').value)
    var quatro1 = Number(document.getElementById('quatro1').value)
    var tres2 = Number(document.getElementById('tres1').value)
    var dois3 = Number(document.getElementById('dois1').value)

    var soma1 = 0
    var soma2 = 0
    soma1 = ((quatro*4) + (tres*3) + (dois*2))
    soma2 = ((quatro1*4) + (tres2*3) + (dois3*2))

    
    

    document.getElementById('pontos1').innerHTML = soma1
    document.getElementById('pontos2').innerHTML = soma2


  }
 

  