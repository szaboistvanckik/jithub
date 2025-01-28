function sorSzam(ksz) {
    i=Math.floor(Math.sqrt(ksz))
    while (ksz%i!=0) {
        i-=1;
    }
    return i;
}

function feltolt(ksz) {
   const t=[];
   for (let i = 0; i < ksz-1; i++) {
        t.push(i);
   } 
   t.push(" ")
   return t;
}

function randomSzam(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}

function kutyulas(t) {
    for (let i = 0; i < t.length; i++) {
        const r1=randomSzam(0,t.length-1);
        const r2=randomSzam(0,t.length-1);
        const s=t[r1];
        t[r1]=t[r2];
        t[r2]=s;
    }
    return t;
}

function indexMeghataroz(i,j,sor, maxsor) {
    return i*sor+j;
}

function teszt(t, sor, oszlop) {
    const iranyok = [[-1,0], [0,1], [1,0], [0,1]]

    for (let i = 0; i < 4; i++) {
        if (t[indexMeghataroz(iranyok[i][0], iranyok[i][1],maxsor)] == "") {
            console.log("typpeeee")
        }
    }
}

function megjelenit(t,sor,oszlop,doboz) {

    doboz.innerHTML = "";

    for (let i = 0; i < sor; i++) {
        const tr=document.createElement("tr");
        for (let j = 0; j < oszlop; j++) {
            const td=document.createElement("td");
            
            td.addEventListener("click", function () {
                teszt(i, j, t);
            });
            td.innerText=t[indexMeghataroz(i,j,sor)]

            tr.appendChild(td);
        }
        doboz.appendChild(tr)
    }
}

function csinald() {
    const doboz=document.getElementById("doboz");
    const sor=parseInt(document.getElementById("sor").value);
    const oszlop=parseInt(document.getElementById("oszlop").value);
    const kartyak=kutyulas(feltolt(sor*oszlop));
    megjelenit(kartyak,sor,oszlop,doboz);
}