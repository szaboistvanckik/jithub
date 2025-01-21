function megszamolas(telefon, tul) {
    let db = 0;

    for (let i = 3; i < telefon.length; i+=4) {
        if (telefon[i].innerText == tul) {
            db++;
        }
        
    }

    return db;
}

function getAdat() {
    const ide = document.getElementById("ide");
    const telefon = document.getElementsByTagName("td");

    ide.innerText = megszamolas(telefon, 30);

    const kulondijasok = document.getElementsByClassName("kulondij");
    
    for (let i = 0; i < kulondijasok.length; i++) {
        kulondijasok[i].style.backgroundColor = "red";
    }

}