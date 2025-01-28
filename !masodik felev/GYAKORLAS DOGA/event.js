function randomszam(also, felso) {
    return Math.floor(Math.random() * (felso - also + 1) + also);
}


function feltoltTomb(x) {
    const lst = [];

    for (let i = 1; i < x - 1; i++) {
        lst.push(i);
    }
    t.push(" ")

    return lst;
}


function sorSzam(ksz) {
    i = Math.floor(Math.sqrt(ksz));
    
    while (ksz % i != 0) {
        i--;
    }
    return i;
}


function shuffle(t) {
    for (let i = 0; i < t.length; i++) {
        const r1 = randomszam(0, t.length - 1);
        const r2 = randomszam(0, t.length - 1);
        const s = t[r1];
        t[r1] = t[r2];
        t[r2] = s;
    }
    return t;
}

function generalj() {
    const tabla = document.getElementById("tabla");
    
    const sor = parseInt(document.getElementById("sor").value)
    const oszlop = parseInt(document.getElementById("oszlop").value)

    const lst = shuffle(feltoltTomb(sor*oszlop));


    tabla.innerHTML = "";

    for (var i = 0; i < sor; i++) {
        const tr = document.createElement("tr");
        for (var j = 0; j < oszlop; j++) {
            const td = document.createElement("td");
            td.innerText= lst[i * sor + j];
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
}