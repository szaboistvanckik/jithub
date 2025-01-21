function feltolt(ora, db) {
    const t = [];
    for (let i = 0; i < db; i++) {
        for (let j = 0; j < db; j++) {
            t.push(i+1);
        }
    }

    for (let i = 0; i < 35-(ora*db); i++) {
        t.push('-')
    }

    return t;
}

function veletleszam(min, max) {
    return Math.floor(Math.random() * (felso - also))
}

function shuffle(t) {
    for (let i = 0; i < t.length; i++) {
        let p1 = veletleszam(0, t.length - 1)
        let p2 = veletleszam(0, t.length - 1)


    }
}

function csinald() {
    const ora = parseInt(document.getElementById("ora").value);
    const db = parseInt(document.getElementById("db").value);

    const t = feltolt(ora, db);
}