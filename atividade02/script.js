"use strict"
/* Documentação
createElement ->
setAttribute
document.body.appendChild(menu_encapsulado);
const menu_encapsulado = document.createElement("div");
menu_encapsulado.setAttribute("id", "menu-encapsulado");


*/


/* CONSTANTES */
const NOMES = ["menu-encapsulado", "btn", "bar","menu-container", "menu-items"]

const DIVS = criar_divs(NOMES);

const HTML = document.documentElement;
const BODY = document.body;
const MENU_ENCAPSULADO = DIVS[0];
const BTN = DIVS[1];
const BAR = DIVS[2];
const MENU_CONTAINER = DIVS[3];
const MENU_ITEMS = DIVS[4];
const LINKS = criar_elementos(4,"a");


construir_arvore(MENU_ENCAPSULADO, BTN, BAR, MENU_CONTAINER, MENU_ITEMS);

/* ESTILIZANDO HTML */

const HTML_STYLE = HTML.style;
HTML_STYLE.margin = "0px";
HTML.style.padding = "0px";
HTML.style.color = "white";
HTML.style.overflow = "hidden";

BODY.style.margin = "0px";
BODY.style.padding = "0px";
BODY.style.color = "white";
BODY.style.overflow = "hidden";


MENU_ENCAPSULADO.style.position = "relative";
MENU_ENCAPSULADO.style.width = "20%";
MENU_ENCAPSULADO.style.background = "transparent";
MENU_ENCAPSULADO.style.padding = "5px 5px 5px 0";


MENU_CONTAINER.style.width = "110%"
MENU_CONTAINER.style.overflow = "visible"
MENU_CONTAINER.style.backgroundColor = "#543330"
MENU_CONTAINER.style.height = "115%";
MENU_CONTAINER.style.position = "relative";
MENU_CONTAINER.style.top = "-40px";

MENU_ITEMS.style.position = "relative";
MENU_ITEMS.style.left = "15%";
MENU_ITEMS.style.top = "7%";
MENU_ITEMS.style.color = "white";
MENU_ITEMS.style.fontSize = "20px;"

BTN.style.position = "relative";
BTN.style.top =  "2%";
BTN.style.left = "85%";
BTN.style.color = "white";
BTN.style.zIndex = "2";
BTN.addEventListener("click", menu_click)
const BARRAS = document.querySelectorAll(".bar");
BARRAS.forEach((barra) => {
barra.style.width = "28px";
barra.style.height = "7px";
barra.style.backgroundColor = "white";
barra.style.border = "1px solid black"

})




LINKS.forEach((link, index) => {
const itens = ["INÍCIO", "PRODUTOS", "CONTATO", "SOBRE"];

link.textContent = itens[index];
link.style.display = "block";
link.style.border = "solid";
link.style.height = "20px";
link.style.width = "74%";
link.style.fontSize = "20px";

MENU_ITEMS.appendChild(link);

const br = document.createElement('br');

MENU_ITEMS.appendChild(br);
});





function criar_divs(elementos)
{
const novos_elementos = elementos.map((nome,NOMES) => {
const div = document.createElement("div");
if(nome == "bar"){
div.setAttribute("class", nome);
return div;
}
div.setAttribute("id", nome);
return div;
})
return novos_elementos;
};

function construir_arvore(MENU_ENCAPSULADO, BTN, BAR, MENU_CONTAINER, MENU_ITEMS)
{

document.body.appendChild(MENU_ENCAPSULADO);
MENU_ENCAPSULADO.appendChild(BTN);
insereClones(3,BAR,BTN);
MENU_ENCAPSULADO.appendChild(MENU_CONTAINER);
MENU_CONTAINER.appendChild(MENU_ITEMS);
}

function criar_elementos(index, tagNome)
{
const lista = []
for (let i = 0; i < index; i ++)
{
const a = document.createElement(tagNome);
lista.push(a);
}
return lista;

}


function insereClones(index, tag_para_clonar, no_pai)
{
for(let i = 0; i < index; i++ )
{
const novaTag = tag_para_clonar.cloneNode(true);
no_pai.appendChild(novaTag);
}
}

let estado = "aberto";
function menu_click(event)
{
console.log(event);
console.log(event.target);
if(estado == "aberto")
{

MENU_CONTAINER.style.left = "-80%";
BTN.style.left = "7%";
MENU_ITEMS.style.display = "none";
estado = "fechado";

console.log("fechado");
estado = "fechado"
}
else
{
MENU_CONTAINER.style.left = "0%";
BTN.style.left = "85%";
MENU_ITEMS.style.display = "block";
estado = "aberto";
console.log("aberto");
}
}