function tocaSom(idElementAudio){    
    document.querySelector(idElementAudio).play();
}


const listaTeclas = document.querySelectorAll('.tecla');

let count = 0;
while (count < listaTeclas.length){
    
    const tecla = listaTeclas[count];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;
    // console.log(idAudio);

    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    count++;
    // console.log(count);
}