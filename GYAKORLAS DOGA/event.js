function randomszam(also, felso) {
    return Math.floor(Math.random() * (felso - also + 1) + also);
}


function feltoltTomb() {
    var szam = parseInt(document.getElementById("x").value);

    const lst = [];

    for (let i = 0; i < szam; i++) {
        lst.push(i, i);
    }

    for (let i = 0; i < szam; i++) {
        let v1 = randomszam(0, 1);
        let v2 = randomszam(0, 1);

        let sv = lst[v1]
        lst[v1] = lst[v2]
        lst[v2] = sv
    }

    return lst;
}

function generalj() {
    var sor = 10;
    var oszlop = 10;


    var tabla = document.getElementById("tabla");
    
    const lst = feltoltTomb()

    for (var i=0; i < sor; i++) {
        var tr=document.createElement("tr");
        for (var j=0; j < oszlop; j++) {
            var td=document.createElement("td");
            td.innerText= lst[i*oszlop + j];
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
}