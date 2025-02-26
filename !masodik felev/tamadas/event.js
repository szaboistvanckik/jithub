function legyenEmoji(td, sor, oszlop) {
    td.innerText = "🤴🏻"; 
    torolEmoji();

    csinaljEllenseg(sor, oszlop);
}

function csinaljEllenseg(oszlop) {
    let ind = veletlenSzam(0, oszlop - 1);

    const utr = document.querySelector("tr:last-child");   

    utr.querySelectorAll("td")[ind].innerHTML = "🐒";
    
}

function veletlenSzam(also, felso) {
    return Math.floor(Math.random() * (felso - also - 1) + also);
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
    const tabla = document.querySelector("table");
    const sor = parseInt(document.getElementById("sor").value);
    const oszlop = parseInt(document.getElementById("oszlop").value);

    megjelenit(tabla, sor, oszlop);
}