/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var a=Math.floor(Math.random()*10);
var b=Math.floor(Math.random()*10)+1;

document.querySelector("#d4").innerHTML = a+" / "+b+" = ";






function verificarResposta4(){
    var c = parseFloat(document.querySelector("#r4").value);
    if (a/b==c){
        Materialize.toast('Parabéns! Você concluiu o desafio!', 5000);
        
        document.querySelector("#acertou4").innerHTML ="<a class='teal waves-effect waves-light btn' href='index.html'>Voltar para o início</a>"
        
    }else{
        Materialize.toast('Você errou. Tente novamente!', 5000);
        a=Math.floor(Math.random()*10);
        b=Math.floor(Math.random()*10)+1;
        document.querySelector("#d4").innerHTML = a+" / "+b+" = ";
    }
    
}





