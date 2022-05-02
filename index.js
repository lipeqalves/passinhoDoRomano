
var escolheTipo = document.querySelector('#selCezar64');

escolheTipo.addEventListener('click', function(){

    var radios = document.getElementsByName("selCodificacao");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked && radios[i].value == 'cifra-cezar'){ 
                //alert("Escolheu: " + radios[i].value);
                var  incremento = document.createElement('input');
                var paragrafo = document.createElement('p');
                var selDiv = document.querySelector(".escolheCodificacao");
                selDiv.append(paragrafo)
                paragrafo.innerText = "Escolha a chave da Cifra de Cezar(Um numero entre 1 e 25): ";
                selDiv.append(incremento)
                incremento.innerText = cifraDeCezar();
            }else if(radios[i].checked && radios[i].value == 'base64'){
                //document.write("Escolheu: " + radios[i].value);
                codBase64()
            } 
    }
});
function cifraDeCezar(){
var btnCodificar = document.querySelector("#codificar")
btnCodificar.addEventListener('click',function(){
    var novaMsg = document.querySelector("#msg");
    novaMsg.innerText = "Codificando mensagem...";
    let selDiv = document.querySelector('.msgCodificada')
    var paragrafo1 = document.createElement('p');
    var paragrafo2 = document.createElement('p');
    selDiv.append(paragrafo1);
    paragrafo1.innerText = ("Mensagem Codificada:");
    selDiv.append(paragrafo2);
    paragrafo2.innerText = cifraDeCezarCodifica();
})
var btnDecodificar = document.querySelector("#decodificar")
    btnDecodificar.addEventListener('click',function(){
    var novaMsg = document.querySelector("#msg");
    novaMsg.innerText = "Decodificando mensagem...";
    let selDiv = document.querySelector('.msgDecodificada')
    var paragrafo1 = document.createElement('p');
    var paragrafo2 = document.createElement('p');
    selDiv.append(paragrafo1);
    paragrafo1.innerText = ("Mensagem Decodificada:");
    selDiv.append(paragrafo2);
    paragrafo2.innerText = cifraDeCezarDecodifica();
    
})
}
function cifraDeCezarCodifica(){
    var mensagem = "abcdefghi".toUpperCase()
    var novaMensagem = "";
    var key = 1;
    for(var i=0; i<mensagem.length; i++){
        var codMensagem = ((mensagem.charCodeAt(i)- 65) + key)%26 + 65;
        novaMensagem += `${String.fromCharCode(codMensagem)}`;               
    }
     return novaMensagem;
}

function cifraDeCezarDecodifica(){
    var mensagem = "bcdefghij".toUpperCase()
    var novaMensagem = "";
    var key = 1;
    for(var i=0; i<mensagem.length; i++){
        var codMensagem = ((mensagem.charCodeAt(i)- 65) + (26-key))%26 + 65;
        novaMensagem += `${String.fromCharCode(codMensagem)}`;
    }
     return novaMensagem;
}

function codBase64(){
    var baseCodificar = document.querySelector("#codificar")
    baseCodificar.addEventListener('click',function(){
        var novaMsg = document.querySelector("#msg");
        var mensagem = "abacate".toUpperCase();
        novaMsg.innerText = "Decodificando mensagem...";
        var selDiv = document.querySelector('.msgDecodificada')
        var paragrafo1 = document.createElement('p');
        var paragrafo2 = document.createElement('p');
        selDiv.append(paragrafo1);
        paragrafo1.innerText = ("Mensagem Decodificada:");
        selDiv.append(paragrafo2);
        return paragrafo2.innerText  = btoa(mensagem);
    })

    var baseDecodificar = document.querySelector("#decodificar")
    baseDecodificar.addEventListener('click',function(){
        var mensagem = "QUJBQ0FURQ==".toUpperCase();
        var novaMsg = document.querySelector("#msg");
        novaMsg.innerText = "Codificando mensagem...";
        var selDiv = document.querySelector('.msgCodificada')
        var paragrafo1 = document.createElement('p');
        var paragrafo2 = document.createElement('p');
        selDiv.append(paragrafo1);
        paragrafo1.innerText = ("Mensagem Codificada:");
        selDiv.append(paragrafo2);
        return paragrafo2.innerText  = atob(mensagem);
         
    })   
}