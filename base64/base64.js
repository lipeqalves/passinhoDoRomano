    var btnCodificar    = document.querySelector("#codificar");
    var btnDecodificar  = document.querySelector("#decodificar")
    var novaMsgEntrada  = document.querySelector("#entradaMsg");
    var novaMsgSaida    = document.querySelector("#saidaMsg");
   
    btnCodificar.addEventListener('click',function(e){
        e.preventDefault();
       
        novaMsgSaida.value = btoa(novaMsgEntrada.value);
    });
   
    btnDecodificar.addEventListener('click',function(e){
        e.preventDefault();
        
        novaMsgSaida.value = atob(novaMsgEntrada.value);
       
    });

    var escolheTipo = document.querySelector('#inicio');

escolheTipo.addEventListener('click', function(){
    

    window.location.assign("../index.html");

});

