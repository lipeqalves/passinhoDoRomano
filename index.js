var escolheTipo = document.querySelector('#selCezar64');

escolheTipo.addEventListener('click', function(){

    var radios = document.getElementsByName("selCodificacao");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked){
            if(radios[i].value == 'cifra-cezar'){  
                //alert("Escolheu: " + radios[i].value);
                var incremento = document.createElement('p');
                var selDiv = document.querySelector("escolheCodificacao");
                selDiv.append(incremento);
                

            } 
        }
    }

});
