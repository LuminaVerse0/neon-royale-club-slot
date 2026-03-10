const symbols = ["🍒","🍋","🔔","💎","7️⃣","👑"];

function spin(){

let reels = [];

for(let i=1;i<=5;i++){

let s = symbols[Math.floor(Math.random()*symbols.length)];

document.getElementById("r"+i).innerHTML = s;

reels.push(s);

}

checkWin(reels);

}

function checkWin(reels){

let win = reels.every(s => s === reels[0]);

if(win){

document.getElementById("result").innerHTML = "🎉 JACKPOT!";

}else{

document.getElementById("result").innerHTML = "Try Again";

}

}
