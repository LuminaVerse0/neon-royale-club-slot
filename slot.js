const symbols = [
"assets/cherry.png",
"assets/lemon.png",
"assets/bell.png",
"assets/diamond.png",
"assets/seven.png",
"assets/crown.png",
"assets/star.png"
];

const rows = 3;
const reels = 5;

let grid = [];
let balance = 1000;
let bet = 10;
let auto = false;
let jackpot = 50000;

const slot = document.getElementById("slot");

function createGrid(){

slot.innerHTML="";

for(let r=0;r<rows;r++){

grid[r]=[];

for(let c=0;c<reels;c++){

let cell=document.createElement("div");

cell.className="cell";

cell.innerHTML="?";

slot.appendChild(cell);

grid[r][c]=cell;

}

}

}

createGrid();

function changeBet(v){

bet=Math.max(10,bet+v);

document.getElementById("bet").innerHTML=bet;

}

function spin(){

if(balance<bet){
document.getElementById("result").innerHTML="No balance";
return;
}

balance-=bet;

jackpot+=bet;

document.getElementById("balance").innerHTML="Balance: "+balance;
document.getElementById("jackpot").innerHTML="JACKPOT: "+jackpot;

document.getElementById("spinSound").play();

for(let r=0;r<rows;r++){

for(let c=0;c<reels;c++){

let s=symbols[Math.floor(Math.random()*symbols.length)];

grid[r][c].innerHTML="<img src='"+s+"' width='60'>";

}

}

checkWin();

if(auto){
setTimeout(spin,900);
}

}

function checkWin(){

let win=false;
let scatter=0;

for(let r=0;r<rows;r++){

let first=grid[r][0].innerHTML;

let match=true;

for(let c=1;c<reels;c++){

if(grid[r][c].innerHTML!==first){
match=false;
}

}

if(match) win=true;

}

for(let r=0;r<rows;r++){
for(let c=0;c<reels;c++){
if(grid[r][c].innerHTML.includes("star.png")) scatter++;
}
}

if(scatter>=3){

let bonus=bet*10;

balance+=bonus;

document.getElementById("result").innerHTML="⭐ BONUS WIN "+bonus;

document.getElementById("balance").innerHTML="Balance: "+balance;

return;

}

if(win){

let prize=bet*5;

balance+=prize;

document.getElementById("balance").innerHTML="Balance: "+balance;

document.getElementById("result").innerHTML="🎉 BIG WIN "+prize;

document.getElementById("result").className="win";

}else{

document.getElementById("result").innerHTML="Try Again";

document.getElementById("result").className="";

}

if(Math.random()<0.0005){

balance+=jackpot;

document.getElementById("result").innerHTML="💰 JACKPOT "+jackpot;

jackpot=50000;

}

}

function toggleAuto(){

auto=!auto;

if(auto) spin();

}
