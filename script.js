//main
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

///////////////////js page
var js0 = document.getElementById("jsdef");
var js1 = document.getElementById("jscalc");
var js2 = document.getElementById("jsalert");
var js3 = document.getElementById("jsmulti");
var js4 = document.getElementById("jssett");
var js5 = document.getElementById("jshtml");
var js6 = document.getElementById("jstxt");
var js7 = document.getElementById("jsevent");
var js8 = document.getElementById("jssrc");

var sjs1 = document.getElementById("jss1");
var sjs2 = document.getElementById("jss2");
var sjs3 = document.getElementById("jss3");
var sjs4 = document.getElementById("jss4");
var sjs5 = document.getElementById("jss5");
var sjs6 = document.getElementById("jss6");
var sjs7 = document.getElementById("jss7");
var sjs8 = document.getElementById("jss8");

var alljs = document.querySelectorAll(".js");
for(var i=0,c=alljs.length;i < c ; i++ ){
    alljs[i].setAttribute("hidden","1")
}
//js0.innerHTML=js1.innerHTML;
var jsshow1 = function(){js0.innerHTML=js1.innerHTML;}
var jsshow2 = function(){js0.innerHTML=js2.innerHTML;}
var jsshow3 = function(){js0.innerHTML=js3.innerHTML;}
var jsshow4 = function(){js0.innerHTML=js4.innerHTML;}
var jsshow5 = function(){js0.innerHTML=js5.innerHTML;}
var jsshow6 = function(){js0.innerHTML=js6.innerHTML;}
var jsshow7 = function(){js0.innerHTML=js7.innerHTML;}
var jsshow8 = function(){js0.innerHTML=js8.innerHTML;}
jsshow2();
sjs1.addEventListener("click",jsshow1);
sjs2.addEventListener("click",jsshow2);
sjs3.addEventListener("click",jsshow3);
sjs4.addEventListener("click",jsshow4);
sjs5.addEventListener("click",jsshow5);
sjs6.addEventListener("click",jsshow6);
sjs7.addEventListener("click",jsshow7);
sjs8.addEventListener("click",jsshow8);



var accb = function{
    alert("welp");
}
var but1=document.getElementById("Abutton");
but1.addEventListener("click",accb);
