function tocaSom(idElementAudio){    
    document.querySelector(idElementAudio).play();
}

const listaTeclas = document.querySelectorAll('.tecla');


for (let count = 0; count < listaTeclas.length; count++){
    
    const tecla = listaTeclas[count];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    
}
