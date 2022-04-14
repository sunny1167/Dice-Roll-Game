var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);



var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;
var randomDiceImageSource = "images/dice" + randomNumber2 + ".png"

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImageSource);

if(randomNumber1 > randomNumber2){
  $("h1").fadeOut(300 , function(){
    $("h1").text("Player 1 Wins! 🚩").fadeIn();
  });
}
else if (randomNumber1 === randomNumber2) {
  $("h1").fadeOut(300 , function(){
    $("h1").text("There's a Tie!").fadeIn();
  });

}
else{
  $("h1").fadeOut(300 , function(){
    $("h1").text("Player 2 Wins! 🚩").fadeIn();
  });
}
