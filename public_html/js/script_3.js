/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var a=Math.floor(Math.random()*100);
var b=Math.floor(Math.random()*100)+1;

document.querySelector("#d4").innerHTML = a+" / "+b+" = ";






function verificarResposta4(){
    var c = parseInt(document.querySelector("#r4").value);
    if (a/b==c){
        Materialize.toast('Parabéns! Você concluiu o desafio!', 5000);
        
    }else{
        Materialize.toast('Você errou. Tente novamente!', 5000);
        a=Math.floor(Math.random()*100);
        b=Math.floor(Math.random()*100)+1;
        document.querySelector("#d4").innerHTML = a+" / "+b+" = ";
    }
    
}





