function randomszam(also, felso) {
    return Math.floor(Math.random() * (felso - also + 1) + also);
}

function feltoltTomb(x) {
    const lst = [];
    x = x / 2;
    for (let i = 1; i <= x; i++) {
        lst.push(i);
        lst.push(i);
    }
    return lst;
}

function sorSzam(ksz) {
    let i = Math.floor(Math.sqrt(ksz));
    while (ksz % i != 0) {
        i--;
    }
    return i;
}

function shuffle(t) {
    for (let i = 0; i < t.length; i++) {
        const r1 = randomszam(0, t.length - 1);
        const r2 = randomszam(0, t.length - 1);
        [t[r1], t[r2]] = [t[r2], t[r1]];
    }
    return t;
}

function lefed(cella) {
    cella.innerText = "■";
}

function felfed(lst, i, j, oszlop, cella, info, pontok, jatekosElem) {
    cella.innerText = lst[i * oszlop + j];

    if (info.length == 1) {
        if (info[0].innerText !== cella.innerText) {
            setTimeout(() => {
                lefed(info[0]);
                lefed(cella);
                jatekosElem.innerText = jatekosElem.innerText.includes("1") ? "2. játékos köre" : "1. játékos köre";
            }, 1000);
        } else {
            if (jatekosElem.innerText.includes("1")) {
                pontok[0].innerText = parseInt(pontok[0].innerText) + 1;
            } else {
                pontok[1].innerText = parseInt(pontok[1].innerText) + 1;
            }
        }
    }

    return info.length == 0 ? [cella] : [];
}

function generalj() {
    const tabla = document.getElementById("tabla");
    const szam = document.getElementById("x").value * 2;
    const sor = sorSzam(szam);
    const oszlop = szam / sor;
    const lst = shuffle(feltoltTomb(szam));

    const pontok = [document.getElementById("pont1"), document.getElementById("pont2")];
    const jatekosElem = document.getElementById("jatekoskijelzo");

    tabla.innerHTML = "";
    let info = [];

    for (let i = 0; i < sor; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < oszlop; j++) {
            const td = document.createElement("td");
            td.addEventListener("click", function() {
                if (td.innerText === "■") {
                    info = felfed(lst, i, j, oszlop, td, info, pontok, jatekosElem);
                }
            });
            td.innerText = "■";
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }

    pontok[0].innerText = "0";
    pontok[1].innerText = "0";
    jatekosElem.innerText = "1. játékos köre";
    
}