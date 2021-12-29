"use struct";


const player0el=document.querySelector(".diplayer--0");
const player1el=document.querySelector(".diplayer--1");
const message =document.querySelector(".messageWins");

const roll_btn =document.querySelector(".roll-dice");
const hold_btn =document.querySelector(".hold");
const new_btn =document.querySelector(".new-game");


const score=document.querySelector(".erekana");
let currentScore = 0;
let activePlayer =0;
let scores =[0 ,0];
let player =true;

const playingG=function(){
   document.querySelector(`.currentDisplay--${activePlayer}`).textContent =0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0 ;
    player0el.classList.toggle("active-player");
    player1el.classList.toggle("active-player");
};
  
roll_btn.addEventListener("click",function(){
 if (player) {
  let randomDice = Math.trunc(Math.random() * 6) + 1;
  score.classList.remove("hidden");
  score.textContent =randomDice;

  if (randomDice !== 1) {
    currentScore +=randomDice;
    document.querySelector(`.currentDisplay--${activePlayer}`).textContent =currentScore;
  }else{ 
   playingG();
  }
 }
});

hold_btn.addEventListener("click",
  function(){
    if (player) {
      randomDice = Math.trunc(Math.random() * 6) + 1;
      scores[activePlayer] +=currentScore;
    document.querySelector(`.HighScore--${activePlayer}`).textContent =scores[activePlayer];
    score.textContent = 0;
    if (scores[activePlayer] >= 100) {
      player =false;
      document.querySelector(`.diplayer--${activePlayer}`).classList.add("displayWin");
      document.querySelector(`.diplayer--${activePlayer}`).classList.remove("active-player");
      document.querySelector(`.diplayer--${activePlayer}`).classList.add("cawaguka");
      document.querySelector(`.currentDisplay--${activePlayer}`).textContent =0;
      if (activePlayer ===0) {
        message.textContent =`Player 1 Wins 🌟🏆`;
      }else{
       message.textContent =`Player 2 Wins 🌟🏆`;
      }
      
      message.classList.remove("hidden");
      score.classList.add("hidden");
      hold_btn.classList.toggle("hidden");
      roll_btn.classList.toggle("hidden");
    }else{
          playingG();
    }
    }
  });

new_btn.addEventListener("click",function(){
  player =true;
  currentScore =0;
  activePlayer =0
  scores=[0, 0] ;
  score.classList.add("hidden");
  message.classList.add("hidden");
  hold_btn.classList.remove("hidden");
  roll_btn.classList.remove("hidden");
  document.querySelector(`.currentDisplay--0`).textContent =0;
  document.querySelector(`.currentDisplay--1`).textContent =0;
  document.querySelector(`.HighScore--0`).textContent =0;
  document.querySelector(`.HighScore--1`).textContent =0;
  document.querySelector(`.diplayer--0`).classList.add("active-player");
  document.querySelector(`.diplayer--0`).classList.remove("displayWin");
  document.querySelector(`.diplayer--1`).classList.remove("displayWin");
  document.querySelector(`.diplayer--1`).classList.remove("active-player");
  // document.querySelector(`.diplayer--1`).classList.remove("active-player");

    // document.querySelector(`.diplayer--1`).classList.toggle("active-player");


  

});
