/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var a=Math.floor(Math.random()*10);
var b=Math.floor(Math.random()*10)+1;

document.querySelector("#d3").innerHTML = a+" * "+b+" = ";
document.querySelector("#d4").innerHTML = a+" / "+b+" = ";





function verificarResposta3(){
    var c = parseInt(document.querySelector("#r3").value);
    if (a*b==c){
        Materialize.toast('Acertou! Vá para a próxima!', 5000);
        document.querySelector("#acertou3").innerHTML = "<a class='teal waves-effect waves-light btn' href='desafio4.html'>Próxima</a>";
    }else{
        Materialize.toast('Você errou. Tente novamente!', 5000);
        a=Math.floor(Math.random()*10);
        b=Math.floor(Math.random()*10);
        document.querySelector("#d3").innerHTML = a+" * "+b+" = ";
    }
    
}