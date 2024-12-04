var mivan = false

function szamKatt(szam) {
    if (mivan) {
        document.getElementById("eredmeny").value = ""
        mivan = false
    }
    document.getElementById("eredmeny").value += szam
}

function muvelet(muvelet) {
    m = muvelet
    a = parseFloat(document.getElementById("eredmeny").value)
    document.getElementById("eredmeny").value = ""
}

function szamoljHaver() {
    b = parseFloat(document.getElementById("eredmeny").value)
    mivan = true
    if (a != -1 && b != -1 && m != "") {
        if (m == "+") {
            document.getElementById("eredmeny").value = a + b
        } 
        else if (m == "-") {
            document.getElementById("eredmeny").value = a - b
        }
        else if (m == "*") {
            document.getElementById("eredmeny").value = a * b
        } 
        else if (m == "/") {
            if (b !== 0) {
                document.getElementById("eredmeny").value = a / b
            } else {
                document.getElementById("eredmeny").value = "0-val nem lehet osztani!"
            }
        }
        else if (m == "sqrt") {
            document.getElementById("eredmeny").value = Math.sqrt(a)
        }
        else if (m == "^2") {
            document.getElementById("eredmeny").value = Math.pow(a, 2)
        }
        else if (m == "sin") {
            document.getElementById("eredmeny").value = Math.sin(a)
        }
        else if (m == "cos") {
            document.getElementById("eredmeny").value = Math.cos(a)
        }
        else if (m == "log") {
            document.getElementById("eredmeny").value = Math.log10(a)
        }
        else if (m == "^") {
            document.getElementById("eredmeny").value = Math.pow(a, b)
        }
        else if (m == "CE") {
            document.getElementById("eredmeny").value = ""
            a = -1
            b = -1
            m = ""
        }
        
        a = -1
        b = -1
        m = ""
    }
}
