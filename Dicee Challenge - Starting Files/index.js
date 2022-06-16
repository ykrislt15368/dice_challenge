var randomImage1= Math.floor(Math.random()*6)+1;

var randomDiceImage="dice"+randomImage1+".png";

var randomImageSource= "images/"+randomDiceImage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


var randomImage2= Math.floor(Math.random()*6)+1;

var randomImageSource2= "images/dice"+randomImage2+".png";

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);



if(randomImage1>randomImage2){
  document.querySelector("h1").innerHTML="..Player1 Wins";
}
else if(randomImage1<randomImage2){
  document.querySelector("h1").innerHTML="Player2 Wins..";
}
else{
  document.querySelector("h1").innerHTML=".Draw.";
}
