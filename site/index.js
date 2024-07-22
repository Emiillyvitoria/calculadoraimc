function cal(){
    var altura= document.getElementById("altura").value/100;
    var peso=( document.getElementById("peso").value);
    
    var imc=peso/(altura*altura)
    if(imc <8.5){
        window.alert("voce esta magro ")
    }
    else if(imc <24.9){
        window.alert("voce esta normal ")
    }
    else if(imc <29.9){
        window.alert("voce esta sobrepeso ")
    }
    else if(imc <39.9){
        window.alert("voce esta com obesidade ")
    }
    else if(imc >39.9){
        window.alert("voce esta com obesidade morbita ")
    }
    }