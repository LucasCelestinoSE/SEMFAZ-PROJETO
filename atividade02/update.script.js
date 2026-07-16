"use strict"
/* CONSTANTES */
const ELEMENTOS_PROPS = [
    {
        tipo: "nav",
        id: "menu-encapsulado",
        filho: {
            tipo: "div",
            nome: "btn",
            filho: {
                tipo: "div",
                quant: 3,
                nome: "bar",
                styles: {
                    width: "28px",
                    height: "7px",
                    backgroundColor: "white",
                    border: "1px solid black"
                }
            },
            styles: {
                position: "relative",
                left: "85%",
                top: "2%",
                color: "white",
                zIndex: "2",
            }
        },
        styles: {
            position: "relative",
            width: "20%",
            background: "transparent",
            padding: "5px 5px 5px 0"
        }
    },
    {
        tipo: "div",
        nome: "menu-container",
        filhos: [
            { 
                tipo: "div",
                nome: "menu-items",
                filhos: [
                    { 
                        itens: ["INíCIO", "PRODUTOS", "CONTATO", "SOBRE"],
                        styles: {
                            display: "block",
                            border: "solid",
                            height: "20px",
                            width: "74%",
                            fontSize: "20px"
                        }
                    } 
                ],
                styles: {
                    position: "relative",
                    left: "15%",
                    top: "7%",
                    color: "white",
                    fontSize: "20px"
                }
            } 
        ], 
        styles: {
            width: "110%",
            height: "115%",
            overflow: "visible",
            backgroundColor: "#543330",
            position: "relative",
            top: "-40px"
        }
    },
    {
        
    }
];
const ESTILOS_GLOBAIS = {
    margin: "0px",
    padding: "0px",
    color: "white",
    overflow: "hidden"
};
}
const elementos_globais = [document.documentElement, document.body];
const DIVS = criar_divs();
const MENU_ENCAPSULADO = DIVS[0];
const BTN = DIVS[1];
const BAR = DIVS[2];
const MENU_CONTAINER = DIVS[3];
const MENU_ITEMS = DIVS[4];
let estado = "aberto";
const MEDIAQUERY1000 = window.matchMedia("(max-width: 1000px)");
const MEDIAQUERY610 = window.matchMedia("(max-width: 610px)");

function main() {
    elementos_globais.forEach((element) => {
        insere_style(element, ESTILOS_GLOBAIS);
    });
    document.body.appendChild(MENU_ENCAPSULADO);
    MENU_ENCAPSULADO.appendChild(BTN);
    insereClones(3, BAR, BTN);
    MENU_ENCAPSULADO.appendChild(MENU_CONTAINER);
    MENU_CONTAINER.appendChild(MENU_ITEMS);
    criar_links_styles(4, "a");
    BTN.addEventListener("click", menu_click);
    MEDIAQUERY1000.addEventListener("change", aplicarResponsividade);
    MEDIAQUERY610.addEventListener("change", aplicarResponsividade);
    aplicarResponsividade();
}

function criar_links_styles(quantidade, tagNome) {
    const itens = ["INÍCIO", "PRODUTOS", "CONTATO", "SOBRE"];
    for (let i = 0; i < quantidade; i++) {
        const a = document.createElement(tagNome);
        a.textContent = itens[i];
        insere_style(a, LINKSTYLES);
        MENU_ITEMS.appendChild(a);
        MENU_ITEMS.appendChild(document.createElement('br'));
    }
}


function insereClones(index, tag_para_clonar, no_pai) {
    for (let i = 0; i < index; i++) {
        const novaTag = tag_para_clonar.cloneNode(true);
        no_pai.appendChild(novaTag);
    }
}

function menu_click(event) {
    if (estado == "aberto") {

        MENU_CONTAINER.style.left = "-80%";
        BTN.style.left = "7%";
        MENU_ITEMS.style.display = "none";
        estado = "fechado";

        console.log("fechado");
        estado = "fechado"
    }
    else {
        MENU_CONTAINER.style.left = "0%";
        BTN.style.left = "85%";
        MENU_ITEMS.style.display = "block";
        estado = "aberto";
        console.log("aberto");
    }
}
function insere_style(div, styles) {
    for (const [chave, valor] of Object.entries(styles)) {
        div.style[chave] = valor;
    }
}
function criar_divs() {
    const novos_elementos = ELEMENTOS_PROPS.map((obj) => {
        const div = document.createElement("div");
        if (obj.nome == "bar") {
            div.setAttribute("class", obj.nome);
            insere_style(div, BARRASTYLES)
            return div;
        }

        div.setAttribute("id", obj.nome);
        insere_style(div, obj.styles)
        return div;
    })
    return novos_elementos;
};


function aplicarResponsividade() {
    console.log("610px match:", MEDIAQUERY610.matches, "| 1000px match:", MEDIAQUERY1000.matches);
    if (MEDIAQUERY610.matches) {
        MENU_ENCAPSULADO.style.width = "100vw";
        BTN.style.left = "85%";
    } else if (MEDIAQUERY1000.matches) {
        MENU_ENCAPSULADO.style.width = "20%";
        BTN.style.left = "75%";
    } else {
        MENU_ENCAPSULADO.style.width = "20%";
        BTN.style.left = "85%";
    }
}
main();
