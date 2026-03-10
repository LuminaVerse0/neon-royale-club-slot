function spin() {

const outcomes = [
{symbols:["A","K","Q","J","10"], payout:0},
{symbols:["7","7","7","7","7"], payout:50},
{symbols:["CROWN","CROWN","CROWN","CROWN","CROWN"], payout:500}
];

let result = outcomes[Math.floor(Math.random()*outcomes.length)];

document.getElementById("result").innerHTML =
result.symbols.join(" | ") + " → Win: " + result.payout + "x";

}
