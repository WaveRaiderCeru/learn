//main
function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
  }

  function openPage2(pageName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("JSS");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink1");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
  }









var s=this.innerWidth/2,h=this.innerHeight;
document.getElementById("vid").setAttribute("width",s);
document.getElementById("vid").setAttribute("height",h);
document.getElementById("defaultOpen").click();
document.getElementById("defaultOpen2").click();



function add(){output1.value=parseInt(input1.value)+parseInt(input2.value);}
function sub(){output1.value=input1.value-input2.value;}
function mult(){output1.value=input1.value*input2.value;}
function div(){output1.value=input1.value/input2.value;}


var input1=document.getElementById("input1"),
    input2=document.getElementById("input2"),
    output1=document.getElementById("output1");
