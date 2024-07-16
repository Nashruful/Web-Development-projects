var randomNumber1 = Math.floor(Math.random() * 6) ;
var randomNumber2 = Math.floor(Math.random() * 6) ;

var imgs = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];
var img1Class = imgs[randomNumber1];
var img2Class = imgs[randomNumber2];
document.querySelector(".img1").setAttribute("src",img1Class);
document.querySelector(".img2").setAttribute("src",img2Class);
if (randomNumber2 > randomNumber1){
    document.querySelector(".container h1").innerHTML = "Player 2 wins! 🚩";

}
else if (randomNumber2 === randomNumber1) {
    document.querySelector(".container h1").innerHTML = "Draw";

}
else {
    document.querySelector(".container h1").innerHTML = " 🚩 Player 1 wins!";

}
