/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function calcula(){
    var n1 = parseFloat(document.querySelector("#n1").value);
    var n2 = parseFloat(document.querySelector("#n2").value);
    var n3 = parseFloat(document.querySelector("#n3").value);
    var n4 = parseFloat(document.querySelector("#n4").value);
    var media = (n1+n2+n3+n4)/4;
    var status = media<6?'reprovado':'aprovado';
    Materialize.toast('A média é '+media+' e o aluno está '+status, 5000);
}





