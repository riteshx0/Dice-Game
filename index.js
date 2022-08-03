

// selecting random dice  image for dice 1
var randomdicenumber1 =  Math.floor(Math.random()*6) + 1;
var randomDiceSource = "images/dice"+ randomdicenumber1+".png";
 var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomDiceSource);

// selecting random dice image for dice 2
var randomdicenumber2 = Math.floor(Math.random()*6) + 1 ;
var randomDiceSource2 = "images/dice"+randomdicenumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src" , randomDiceSource2);

// changing h1 after competition
if(randomdicenumber1 > randomdicenumber2){
  document.querySelector("h1").innerHTML = " 👍 player 1 wins ";
}
  else if (randomdicenumber1 < randomdicenumber2){
    document.querySelector("h1").innerHTML = "  player 2 wins 👍 ";
  }
  else {
    document.querySelector("h1").innerHTML = " Draw !  ";
  }
