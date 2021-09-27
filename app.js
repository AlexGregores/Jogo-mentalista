let numeroSecreto = parseInt(Math.random() * 11) //variável necessariamente fora da função

function Chutar () {
    let chute =parseInt(document.getElementById("valor").value);
    let elementoResultado = document.getElementById("resultado");
 
    if(chute == numeroSecreto ) {
      elementoResultado.innerHTML =  "Acertou, Parabéns!"
    } else if( chute > 10 || chute < 0)

     {
        elementoResultado.innerHTML = "Errou, Apenas numeros de 1 a 10 "
    }
    else {
        elementoResultado.innerHTML = "Errou, o numero certo era " + numeroSecreto + "  tente novamente!"
    }
    
   



}

