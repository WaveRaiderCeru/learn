//main


var s = this.innerWidth / 2, h = this.innerHeight;
document.getElementById("vid").setAttribute("width", s);
document.getElementById("vid").setAttribute("height", h);
document.getElementById("defaultOpen").click();
document.getElementById("defaultOpen2").click();




var input1 = document.getElementById("input1"),
  input2 = document.getElementById("input2"),
  output1 = document.getElementById("output1");

var bts = document.querySelectorAll(".b");
var att = document.getElementById("bt5");
var imm = document.getElementById("imm");
var vi =document.getElementById("vv");










imm.addEventListener("click", gn);
function gn() { alert("GN"); }





function funb() { vi.innerText="bye bye"}
function add() { output1.value = parseInt(input1.value) + parseInt(input2.value); }
function sub() { output1.value = parseInt(input1.value) - parseInt(input2.value); }
function mult() { output1.value = parseInt(input1.value) * parseInt(input2.value); }
function div() { output1.value = parseInt(input1.value) / parseInt(input2.value); }

for (var i = 0, x = bts.length; i < x; i++) {
  var d = function () {
    alert("ff");
  }
  bts[i].addEventListener("click", d);
}

function bt5f() {
  alert("oops");
  att.setAttribute("hidden", "1");
}



function openPage(pageName, elmnt, color) {
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
  att.removeAttribute("hidden");
}


