var keret = document.getElementById("eredmeny");

function szamolj() {
    var num = parseInt(document.getElementById("szam").value);
    var pow = parseInt(document.getElementById("hatvany").value);

    var ul = document.createElement("ul");

    for (var i = 0; i <= Math.abs(pow); i++) {
        var li = document.createElement("li");
        
        // console.log(Math.pow(num, pow));
        li.innerText = num + "^" + i + "=" + num**(i*Math.sign(pow));
        ul.appendChild(li);        
    }

    keret.appendChild(ul)
}