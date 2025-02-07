function randomszam(also, felso) {
    return Math.floor(Math.random() * (felso - also + 1) + also);
}

function feltoltTomb(x) {
    const lst = [];
    x = x / 2

    for (let i = 1; i <= x; i++) {
        lst.push(i);
        lst.push(i);
    }

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

function lefed(cella) {
    cella.innerText = "■";
}

function felfed(lst, i, j, oszlop, cella, info) {
    cella.innerText = lst[i * oszlop + j]; 
    info[0]++;

    if (info[0] % 2 == 0) {
        if (info[1].innerText != cella.innerText) {
            setTimeout(function() {
                lefed(cella);
                lefed(info[1]);
            }, 1000);
        }
    }
    else {
        info[1] = cella;
    }

    return info;
}

function generalj() { 
    let info = [0, null];

    const tabla = document.getElementById("tabla");
    const szam = document.getElementById("x").value * 2;
    const sor = sorSzam(szam);
    const oszlop = szam / sor;

    const lst = shuffle(feltoltTomb(szam));

    
    tabla.innerHTML = "";

    for (let i = 0; i < sor; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < oszlop; j++) {
            const td = document.createElement("td");
            td.addEventListener("click",function() {
                info = felfed(lst, i, j, oszlop, this, info);
            })

            // td.innerText= lst[i * oszlop + j];
            td.innerText = "■";
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
}