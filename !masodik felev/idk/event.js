var idozito;
var szamlalo = 0;
const szam = document.querySelector("#szam");

function szamMegjelenik() {
    document.querySelector("#szam").innerText = Math.round(szamlalo * 100) / 100;
    szamlalo += 0.1;
}

function rajt() {
    idozito = szamMegjelenik();
    idozito = setInterval(szamMegjelenik, 100)
}

function stop() {
    clearInterval(idozito);
}

function muti() {
    clearInterval(idozito);
    szamlalo = 0;
    document.querySelector("#szam").innerText = szamlalo;
}