if (window.performance.navigation.type === 1) {
    rollDice();

}
function rollDice(){
var random1 = Math.floor(Math.random()*6)+1;
if(random1===1){
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
}
if(random1===2){
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
}
if(random1===3){
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
}
if(random1===4){
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
}
if(random1===5){
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
}
var random2 = Math.floor(Math.random()*6)+1;
if(random2===1){
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
}
if(random2===2){
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
if(random2===3){
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
if(random2===4){
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
if(random2===5){
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
}
if(random1>random2){
    document.querySelector("h1").textContent="Player 1 wins";
}
else if(random1===random2){
    document.querySelector("h1").textContent="Its a draw";
}
else{
    document.querySelector("h1").textContent="Player 2 wins";
}
}