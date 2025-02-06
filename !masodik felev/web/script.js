function Create(){
    var height = parseInt(document.getElementById("row").value)
    var width = parseInt(document.getElementById("column").value)
    var box = document.getElementById("box")
    const lst = Scramble(Fill(new Array(), height, width), height*width)
    document.getElementById('alertMessage').style.display = 'none';
    Visualize(width, height, lst, box)
}

function WinCheck(list) {
    let i = 0;
    let good = true;
    while (i < list.length && good) {
        if (!(i + 1 === list[i]) && list[i] != " ") {
            good = false;
        }
        i++;
    }
    if (good) {
        document.getElementById('alertMessage').style.display = 'block';
    }
}

function IndexFinder(i, j, row) {
    return i*row + j
}

function Inside(i, j, height, width){
    return i >= 0 && i < height && j >= 0 && j < width
}

function Test(list, i, j, row, column){
    const ways = [[-1,0], [0,1], [1,0], [0, -1]]
    console.log(i, j)
    for (let k = 0; k < ways.length; k++) {
        if (Inside(i + ways[k][0],j + ways[k][1], row, column) && list[IndexFinder(i + ways[k][0],j + ways[k][1], row)] === " "){
            const empty = IndexFinder(i + ways[k][0],j + ways[k][1], row)
            const current = IndexFinder(i, j, row)
            list[empty] = list[current]
            list[current] = " "
            WinCheck(list)
        }
    }
    
    Visualize(row, column, list, box)
}

function Winnable(){
    return false
}

function Scramble(lst, max){
    for(let i = 0; i <= max; i++){
        let r1 = random(0, max-1)
        let r2 = random(0, max-1)
        let s = lst[r1]
        lst[r1] = lst[r2]
        lst[r2] = s
    }
    if(Winnable(lst)){
        Scramble(lst)
    }
    return lst
}

function Visualize(height, width, lst, box){
    box.innerText = ""
    var table = document.createElement("table")

    for(let i = 0; i < height; i++){
        var tr = document.createElement("tr")
        for(let j = 0; j < width; j++){
            var td = document.createElement("td")
            td.innerText = lst[IndexFinder(i, j, width)]
            td.addEventListener("click", function (){
                Test(lst, i, j, width, height)
            })
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    box.appendChild(table)
}

function Search(lst, num){
    for(let i = 0; i < lst.length; i++){
        if(lst[i] == num){
            return true
        }
    }
    return false
}

function random(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function Fill(lista, height, width){
    for(let i = 0; i < height * width-1; i++){
        lista.push(i+1)
    }
    lista.push(" ")
   return lista
}