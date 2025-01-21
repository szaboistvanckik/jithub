function eldont(tomb, mit) {
    let i = 0;
    while (i < tomb.length && tomb[i] != mit) {
        i++;
    }

    return i < tomb.length;
}

function feltolttomb(maxertek) {
    const t = [];

    for (let i = 0; i < maxertek; i++) {
        let r;
        do {
            r = math.floor(math.random() * maxertek + 1)
        } while(eldont(t, r))
    }
    
    return t;
}

function create() {
    var sor = parseInt(document.getElementById("sor").value);
    var oszlop = parseInt(document.getElementById("oszlop").value);

    var table = document.getElementById("tabla");

    for (var i = 0; i < sor; i++) {
        var tr = document.createElement("tr");
        for (var j = 0; j < oszlop; j++) {
            var td = document.createElement("td");
            
            td.innerText = i * oszlop + j + 1;

            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}