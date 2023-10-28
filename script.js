var topset=document.getElementById("topset");
var image1=document.getElementById("icon01");
var hello    = document.getElementById("option01");
var exhtml   = document.getElementById("option02");
var excss    = document.getElementById("option03");
var exjs     = document.getElementById("option04");
var form     = document.getElementById("option05");

var div0 = document.getElementById("option0");
var div1 = document.getElementById("option1");
var div2 = document.getElementById("option2");
var div3 = document.getElementById("option3");
var div4 = document.getElementById("option4");
var div5 = document.getElementById("option5");

var hide_all = function(){
    div1.setAttribute("hidden","1");
    div2.setAttribute("hidden","1");
    div3.setAttribute("hidden","1");
    div4.setAttribute("hidden","1");
    div5.setAttribute("hidden","1");    
}
hide_all();
div0.innerHTML=div1.innerHTML;
var show1 = function(){div0.innerHTML=div1.innerHTML;}
var show2 = function(){div0.innerHTML=div2.innerHTML;}
var show3 = function(){div0.innerHTML=div3.innerHTML;}
var show4 = function(){div0.innerHTML=div4.innerHTML;}
var show5 = function(){div0.innerHTML=div5.innerHTML;}

hello.addEventListener("click",show1);
exhtml.addEventListener("click",show2);
excss.addEventListener("click",show3);
exjs.addEventListener("click",show4);
form.addEventListener("click",show5);


