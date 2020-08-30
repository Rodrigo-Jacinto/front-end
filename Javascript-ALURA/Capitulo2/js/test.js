var para = document.createElement("p");
para.setAttribute("id", "p3");

var node = document.createTextNode("Terceiro Paragrafo");
para.appendChild(node);
//para.textContent = "Terceiro Paragrafo";

var div = document.querySelector("#cont");
var p1 = document.querySelector("#p1");
div.insertBefore(para, p1);

//div.removeChild(p1);
