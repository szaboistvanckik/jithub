function feltoltErtekkel(db, mit) {
    const p = [];
    for (let i = 0; i < db; i++) {
        p.push(mit);
    }
    return p;
}

function feltolt(sor, oszlop, darab) {
    let p = [];

    p = p.concat(feltoltErtekkel((sor*oszlop-darab), 0));
    p = p.concat(feltoltErtekkel(darab, 1));

    return p;
}

function kever(p) {
    for (let i = 0; i < p.length; i++) {
        let p1 = Math.floor(Math.random()*p.length);
        let p2 = Math.floor(Math.random()*p.length);
        let sv = p[p1];
        p[p1] = p[p2];
        p[p2] = sv;
    }
    return p;
}

function tombToMatrix(index, sor, oszlop) {
    return [Math.floor(index / oszlop), index%oszlop];
}

function matrixToTomb(sorind, oszlopind, oszlop) {
    return sorind * oszlop + oszlopind;
}

function palyanVagyunkE(sorind, oszlopind, sor, oszlop) {

}

function szomszedCellakatNovel(sorind, oszlopind) {

}

function mindentVegigNez() {

}

function muti() {
    const sor = parseInt(document.getElementById("sor").value);
    const oszlop = parseInt(document.getElementById("oszlop").value);
    const darab = parseInt(document.getElementById("darab").value);  
    const doboz = document.getElementById("doboz");  

    doboz.innerHTML = "";

    const table = document.createElement("table");

    let p = feltolt(sor, oszlop, darab);

    p = kever(p);

    for (let i = 0; i < sor; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < oszlop; j++) {
            const td = document.createElement("td");
            td.innerText = p[matrixToTomb(i,j,oszlop)]
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    doboz.appendChild(table);
}