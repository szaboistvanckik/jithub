function veletlenSzam(also, felso) {
    return Math.floor(Math.random()*(felso-also+1)+also);
}

function eldont(tomb, mit) {
    let i=0
    while (i < tomb.length && tomb[i] != mit) {
        i++;
    }
    return i < tomb.length;
}


function feltoltTomb(maxErtek) {
    const t=[]
    for (let i = 0; i < maxErtek; i++) {
        let vsz;
        do {
            vsz = veletlenSzam(0, 1);
        } while(eldont(t, vsz));
        t.push(vsz)
    }
    return t;
}

function feltoltTomb2(maxErtek) {
    const t=[];
    for (let i=1; i<=maxErtek; i++) {
        t.push(i);
    }

    for (let i=0; i<maxErtek; i++) {
        let v1=veletlenSzam(0, 1);
        let v2=veletlenSzam(0, 1);
        let sv=t[v1]
        t[v1]=t[v2]
        t[v2]=sv
    }
    return t
}

function create() {
    var sor=parseInt(document.getElementById("sor").value);
    var oszlop=parseInt(document.getElementById("oszlop").value);
    var tabla=document.getElementById("tabla");
    const list=feltoltTomb2(sor*oszlop)
    for (var i=0; i<sor; i++) {
        var tr=document.createElement("tr");
        for (var j=0; j<oszlop; j++) {
            var td=document.createElement("td");
            td.innerText=list[i*oszlop+j];
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }

}