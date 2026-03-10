const symbols=["🍒","🍋","🔔","💎","7️⃣","⭐"]

const rows=3
const reels=5

const slot=document.getElementById("slot")

let grid=[]

function createGrid(){

for(let r=0;r<rows;r++){

grid[r]=[]

for(let c=0;c<reels;c++){

let cell=document.createElement("div")

cell.className="cell"

cell.innerHTML="?"

slot.appendChild(cell)

grid[r][c]=cell

}

}

}

createGrid()

function spin(){

fetch("/play",{method:"POST"})
.then(res=>res.json())
.then(data=>{

for(let r=0;r<rows;r++){

for(let c=0;c<reels;c++){

let s=symbols[Math.floor(Math.random()*symbols.length)]

grid[r][c].innerHTML=s

}

}

})

}
