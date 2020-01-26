var randomNumber1 = Math.floor((Math.random())*6) + 1;
var randomNumber2 = Math.floor((Math.random())*6) + 1;
var randomImg1 = "images/dice"+randomNumber1+".png";
var randomImg2 = "images/dice"+randomNumber2+".png";
// Random Number 1

document.querySelector(".img1").setAttribute("src",randomImg1);

// Random Number 2

document.querySelector(".img2").setAttribute("src",randomImg2);


// Title change

 if (randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "🎲 Player 1 won";
 }
 else if (randomNumber1 < randomNumber2) {
     document.querySelector("h1").textContent = "Player 2 won 🎲";
 }
else{
    document.querySelector("h1").textContent = "Draw try again";
}
