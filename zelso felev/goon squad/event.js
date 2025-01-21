var keret = document.getElementById("eredmeny");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var szamok = [];


function generalj() {
    keret.innerHTML = "";

    var sorok = parseInt(document.getElementById("y").value);
    var oszlopok = parseInt(document.getElementById("x").value);

    var table = document.createElement("table");

    for (var i = 1; i <= sorok; i++) {
        var tr = document.createElement("tr");
        table.appendChild(tr);

        for (var j = 1; j <= oszlopok; j++) {
            var td = document.createElement("td");

            td.innerText = i * j;

            tr.appendChild(td);
        }
    }

    keret.appendChild(table);
}
