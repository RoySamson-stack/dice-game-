var randomNumber1 = Math.floor(Math.random()* 6) + 1;
var randomNumber2 = Math.floor(Math.random()* 6) + 1;


//get random images for dice
var randomImage1 = "images/dice" + randomNumber1 + ".png"
//set the image using setAttribute
document.querySelectorAll("img")[0].setAttribute("src", randomImage1);


var randomImage2 = "images/dice" + randomNumber2 + ".png"
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);
