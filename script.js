const box = document.querySelector(".container");
const imagens = document.querySelectorAll(".container img");

let contador = 0;

function carrossel(){
    contador++;
    
    if(contador > imagens.length -1){
        contador = 0;
    }

    box.style.transform = `translateX(${-contador * 250}px)`
}

setInterval(carrossel,1800);