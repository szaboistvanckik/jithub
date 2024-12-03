// console.log("Hello Világ!")
// console.log(document.getElementById("bekezdes").innerText)
// var szoveg="asdasdas"

// console.log(szoveg, 12)

// var a = parseInt(document.getElementById("a").value)
// var b = Number(document.getElementById("b").value)
// var m=""
// var e = document.getElementById("eredmeny")


// function katt(a) {
//     console.log(a)
// }


var mivan = false
function szamKatt(szam) {
    if (mivan){
        document.getElementById("eredmeny").value = ""
        mivan = false
    }
    document.getElementById("eredmeny").value += szam
}

function muvelet(muvelet) {
    m = muvelet
    a = parseInt(document.getElementById("eredmeny").value)
    document.getElementById("eredmeny").value = ""
}

function szamoljHaver() {
    b = parseInt(document.getElementById("eredmeny").value)
    mivan = true
    if (a != -1 && b != -1 && m != "") {
        document.getElementById("eredmeny").value = a + b
        if (m == "+") {
            document.getElementById("eredmeny").value = a + b
        } else if (m == "-") {
            document.getElementById("eredmeny").value = a - b
        } else if (m == "*") {
            document.getElementById("eredmeny").value = a * b
        } else {
            document.getElementById("eredmeny").value = a / b
        }
        a = -1
        b = -1
        m = ""
    }
}