const symbols = ["🍒","🍋","🔔","💎","7️⃣","👑"];

function spin(){

document.getElementById("spinSound").play();

let reels = [];

for(let i=1;i<=5;i++){

let reel = document.getElementById("r"+i);

reel.classList.add("spin");

setTimeout(()=>{

let s = symbols[Math.floor(Math.random()*symbols.length)];

reel.innerHTML = s;

reel.classList.remove("spin");

reels.push(s);

if(reels.length === 5){
checkWin(reels);
}

}, i*300);

}

}

function checkWin(reels){

let win = reels.every(s => s === reels[0]);

if(win){

document.getElementById("result").innerHTML = "🎉 JACKPOT!";
document.getElementById("result").className = "win";

}else{

document.getElementById("result").innerHTML = "Try Again";
document.getElementById("result").className = "";

}

}
