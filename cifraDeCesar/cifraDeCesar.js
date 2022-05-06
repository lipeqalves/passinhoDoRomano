
    var btnCodificar = document.querySelector("#codificar");
    var btnDecodificar = document.querySelector("#decodificar")
    var novaMsgEntrada = document.querySelector("#entradaMsg");
    var novaMsgSaida = document.querySelector("#saidaMsg");
    var chave = document.querySelector("#chave");

    btnCodificar.addEventListener('click',function(e){
        e.preventDefault();
        var chavePassos = chave.value;
        var mensagemCod = novaMsgEntrada.value;
        novaMsgSaida.value = cifraDeCesarCodifica(mensagemCod, chavePassos);
    });
   
    btnDecodificar.addEventListener('click',function(e){
        e.preventDefault();
        var chavePassos = chave.value;
        var mensagemDecod = novaMsgEntrada.value;
        novaMsgSaida.value = cifraDeCesarDecodifica(mensagemDecod, chavePassos);
    });

    function cifraDeCesarCodifica(mensagem, key){
       mensagem = mensagem.toUpperCase();
       key = parseInt(key);
        var novaMensagem = "";
        for(var i=0; i<mensagem.length; i++){
            var codMensagem = ((mensagem.charCodeAt(i) - 65) + key)%26 + 65;
            novaMensagem += `${String.fromCharCode(codMensagem)}`; 
        }
        return novaMensagem;
    }   
    function cifraDeCesarDecodifica(mensagem, key){
        mensagem = mensagem.toUpperCase();
        key = parseInt(key);
        var novaMensagem = "";
        for(var i=0; i<mensagem.length; i++){
            var codMensagem = ((mensagem.charCodeAt(i) - 65) + (26 - key))%26 + 65;
            novaMensagem += `${String.fromCharCode(codMensagem)}`;
        }
         return novaMensagem;
    }

var escolheTipo = document.querySelector('#inicio');

escolheTipo.addEventListener('click', function(){
    

    window.location.assign("../index.html");

});