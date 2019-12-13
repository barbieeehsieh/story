//When we click START
//Write "Once upon a time" into our story div


//DOM maniuplation Visual Novel Game
//functions are simply a list of commands to do

//variables//
var bf = 'boyfriend';

//audio variables//
var frozenSound = new Audio('audio/intotheunknown.mp3');
var loseSound = new Audio('audio/lose.mp3');
var fightSound = new Audio('audio/fight.mp3');
var crySound = new Audio('audio/cry.mp3');
var gamingSound = new Audio('audio/gaming.mp3');
var clickSound = new Audio('audio/click.mp3');
var sadSound = new Audio('audio/sad.mp3');
var yesSound = new Audio('audio/yes.mp3');
var awwSound = new Audio('audio/aww.mp3');





//Intro
document.querySelector(".start-btn").addEventListener("click",function() {
  gamingSound.play();
  clickSound.play();
  //1. write intro to our Story
  document.querySelector('.description').classList.add('invisible');
  document.querySelector('.intro').classList.add('invisible');
  document.querySelector('.story').innerHTML = "<p>You are now a 15 years old teenager who have a "+bf+" and have a group of friends you know for 10 years. <br><br> ***Christmas is comming up!*** <br><br> Your friends invite you to go for a movie and visit Taipei for Christmas! However, your " + bf + "  also invites you to amusement park. Who's invitation will you accept?</p>";

  //2. Remove Start button
  document.querySelector('.start-btn').classList.add('invisible');
  //Don't need dots when adding classlist

  //3. Show our next buttons
  document.querySelector(".boyfriend-btn").classList.remove("invisible");
  document.querySelector(".friends-btn").classList.remove('invisible');
} );




//Friends
document.querySelector(".friends-btn").addEventListener("click",function() {
  clickSound.play();

  document.querySelector('.story').innerHTML = "<p> Luckily, your "+bf+" didn't get mad! He wishes you to have fun with your friends :) Now you get to choose which movie to watch with your friend. Which one will you choose?</p><br><br><img src='images/frozen2.jpg'><img src='images/jumanji2.jpg'>";

  document.querySelector('.friends-btn').classList.add('invisible');
  document.querySelector('.boyfriend-btn').classList.add('invisible');
  document.querySelector(".frozen2-btn").classList.remove("invisible");
  document.querySelector(".jumanji2-btn").classList.remove('invisible');
} );

//Frozen2
document.querySelector(".frozen2-btn").addEventListener("click",function() {
  gamingSound.pause();
  frozenSound.play();
  clickSound.play();

  document.querySelector('.story').innerHTML = "<p>As you're enjoying watching Elsa making snowflakes, an expected person appears...<br><br>You saw your "+bf+" infront of you with another girl!</p><br><br><img src='images/elsa.gif'><img src='images/whatthehell.gif'>";

  document.querySelector('.frozen2-btn').classList.add('invisible');
  document.querySelector('.jumanji2-btn').classList.add('invisible');
  document.querySelector(".continue-btn").classList.remove("invisible");
} );

//Jumanji2
document.querySelector(".jumanji2-btn").addEventListener("click",function() {
  clickSound.play();
  gamingSound.pause();
  fightSound.play();

  document.querySelector('.story').innerHTML = "<p>What??? You saw your boyfriend watching the movie with another girl! <br> You and your boyfriend start screaming and fighting in the theater.....</p><br><br><img src='images/fight2.webp'>";

  document.querySelector('.frozen2-btn').classList.add('invisible');
  document.querySelector('.jumanji2-btn').classList.add('invisible');
  document.querySelector('.asf-btn').
  classList.remove('invisible');
});

//As you're fighting
document.querySelector(".asf-btn").addEventListener("click",function() {
  clickSound.play();

  document.querySelector('.story').innerHTML =  "<p> Unfortunately... as you guys are fighting... <br><img src='images/fight.gif'></p>";

  document.querySelector('.asf-btn').
  classList.add('invisible');
  document.querySelector('.swh-btn').
  classList.remove('invisible');
  });


//See What Happened
document.querySelector(".swh-btn").addEventListener("click",function() {
  fightSound.pause();
  loseSound.play();

  document.querySelector('.story').innerHTML = "<p> You slipped and you broke your nose... <br><br> Game loose. <br><img src='images/slip.webp'></p>";
  document.querySelector('.swh-btn').classList.add('invisible');
});

//Continue
document.querySelector(".continue-btn").addEventListener("click",function() {
  frozenSound.pause();
  clickSound.play();
  sadSound.play();

  document.querySelector('.story').innerHTML = "<p>Oops...ok so you broke up with your "+bf+". Game lose</p><br><br><img src=''><img src='images/wth.gif'>";

  document.querySelector(".continue-btn").classList.add("invisible");
} );

// Boyfriend
document.querySelector(".boyfriend-btn").addEventListener("click",function() {
  clickSound.play();

  document.querySelector('.story').innerHTML = "<p>Oops...Your friend knew that you chose your " +bf+ " over them. Your friends are super angry and decide to find your "+bf+" and start a fight with him. <br><br>What would you do?<br><img src='images/angry.gif'></p>";

  document.querySelector('.friends-btn').classList.add('invisible');
  document.querySelector('.boyfriend-btn').classList.add('invisible');
  document.querySelector(".apologize-btn").classList.remove("invisible");
  document.querySelector(".fight-btn").classList.remove('invisible');
} );

//Apologize
document.querySelector(".apologize-btn").addEventListener("click",function() {
  clickSound.play();

  document.querySelector('.story').innerHTML = "<p> Your friends said there is price to pay. Either you choose to break up with your "+bf+", or buy them starbucks for 6 months.<br><br> What would you choose?<br><img src='images/anxious.gif'></p>";

  document.querySelector('.apologize-btn').classList.add('invisible');
  document.querySelector('.fight-btn').classList.add('invisible');
  document.querySelector('.starbucks-btn').classList.remove('invisible');
  document.querySelector('.breakup-btn').classList.remove('invisible');
} );

//Starbucks
document.querySelector(".starbucks-btn").addEventListener("click",function() {
  gamingSound.pause();
  awwSound.play();
  clickSound.play();

  document.querySelector('.story').innerHTML = "<p> Happily, your "+bf+" said he will pay for the price as well. Happy happy ending!<img src='images/happy1.gif'></p>";

  document.querySelector('.starbucks-btn').classList.add('invisible');
  document.querySelector('.breakup-btn').classList.add('invisible');

} );


//Breakup
document.querySelector(".breakup-btn").addEventListener("click",function() {
  gamingSound.pause();
  clickSound.play();
  yesSound.play();

  document.querySelector('.story').innerHTML = "<p> You cried for 3 whole days because you break up with your "+bf+" <br><br>...<br><br>BUT! you meet a cute guy in the movies. <br><br>Happy ending! <br><img src='images/wow.gif'</p>";

  document.querySelector('.starbucks-btn').classList.add('invisible');
  document.querySelector('.breakup-btn').classList.add('invisible');
} );

//Fight
document.querySelector(".fight-btn").addEventListener("click",function() {
  gamingSound.pause();
  fightSound.play();
  clickSound.play();

  document.querySelector('.story').innerHTML = "<p> Unfortunately... as you guys are fighting... <br><img src='images/fight.gif'></p>";

  document.querySelector('.apologize-btn').classList.add('invisible');
  document.querySelector('.fight-btn').classList.add('invisible');
  document.querySelector('.swh-btn').classList.remove('invisible');
});

//See what happened
document.querySelector(".swh-btn").addEventListener("click",function() {

  clickSound.play();

  document.querySelector('.story').innerHTML = "<p> You slipped and you broke your nose... <br><br> Game loose. <br><img src='images/slip.webp'></p>";

  document.querySelector('.swh-btn').classList.add('invisible');
});


//Notes//

//Declare a variable for your sound object
//new means creating a copy of the premade Audio object in Javascript
//In the brackets, write down where your audio file is
var loseSound = new Audio('audio/lose.mp3')
loseSound.play
//to Call your audio file, type the name of it followed by .play();
//ex. loseSound.play()
