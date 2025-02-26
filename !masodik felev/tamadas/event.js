var virusSor;
var virusOszlop;
var idoZito;

function legyenEmoji(td, sor, oszlop) {
    td.innerText = "🤴🏻"; 
    torolEmoji();

    csinaljEllenseg(sor, oszlop);
}

function lovolDozz() {
    setInterval(elINdul, veletlenSzam(5000, 10000));
}

function elINdul() {
    idozito = setInterval(virusLeptet, 7000)
}

function virusLeptet() {
    td = document.querySelector(`tr:nth-child(${virusSor + 1}) td:nth-child(${virusOszlop + 1})`);

    virusSor--;
    td.innerText = "■";

    virusOszlop = (veletlenSzam(-1, 1) + oszlop) % oszlop;

    td = document.querySelector(`tr:nth-child(${virusSor + 1}) td:nth-child(${virusOszlop + 1})`);

    td.innerText = "😍"

    if (virusSor == -1) {
        clearInterval(idozito);
    }
}

function csinaljEllenseg(sor, oszlop) {
    let ind = veletlenSzam(0, oszlop - 1);

    const utr = document.querySelector("tr:last-child");   

    utr.querySelectorAll("td")[ind].innerHTML = "🐒";
    virusSor = sor - 1;
    virusOszlop = ind;

    setTimeout(lovolDozz, 5000);
}

function veletlenSzam(also, felso) {
    return Math.floor(Math.random() * (felso - also + 1) + also);
}

function torolEmoji()  {
    const tds = document.querySelectorAll("tr:nth-child(1) > td");

    for (let i = 0; i < tds.length; i++) {
        tds[i].onclick = "";
    }
}

function megjelenit(tabla, sor, oszlop) {
    tabla.innerHTML = "";

    for (let i = 0; i < sor; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < oszlop; j++) {
            let td = document.createElement("td"); 
            td.innerText = "■";

            if (i == 0) {
                td.onclick = function(){legyenEmoji(this, sor, oszlop)};
            }

            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
}

function indexMeghataroz(i, j, oszlop) {
    return i * oszlop + j;
}

function generalj() {
    tabla = document.querySelector("table");
    sor = parseInt(document.getElementById("sor").value);
    oszlop = parseInt(document.getElementById("oszlop").value);

    megjelenit(tabla, sor, oszlop);
}