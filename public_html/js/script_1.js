/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var a=Math.floor(Math.random()*100);
var b=Math.floor(Math.random()*100)+1;

document.querySelector("#d2").innerHTML = a+" - "+b+" = ";







function verificarResposta2(){
    var c = parseInt(document.querySelector("#r2").value);
    if (a-b==c){
        Materialize.toast('Acertou! Vá para a próxima!', 5000);
        document.querySelector("#acertou2").innerHTML = "<a class='teal waves-effect waves-light btn' href='desafio3.html'>Próxima</a>";
    }else{
        Materialize.toast('Você errou. Tente novamente!', 5000);
        a=Math.floor(Math.random()*100);
        b=Math.floor(Math.random()*100);
        document.querySelector("#d2").innerHTML = a+" - "+b+" = ";
    }
    
}







