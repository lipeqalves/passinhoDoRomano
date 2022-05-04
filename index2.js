
var escolheTipo = document.querySelector('#selCezar64');

escolheTipo.addEventListener('click', function(){
    
    var radios = document.getElementsByName("selCodificacao");
    
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked && radios[i].value == 'cifra-cezar'){ 
    
            window.location.assign("./cifraDeCesar/cifraDeCesar.html");
        
        }else if(radios[i].checked && radios[i].value == 'base64'){
            
            window.location.assign("./base64/base64.html");
       } 
    }
});