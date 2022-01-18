// ===================individual query selector===============
const playerOne = document.querySelector(".player1_container");
const playerTwo = document.querySelector(".player2_container");
const player1_fireBtn = document.querySelector(".player1_fireBtn");
const player2_fireBtn = document.querySelector(".player2_fireBtn");
const playeer1_health_bar = document.querySelector(".player1HealthbarFiller");
const playeer2_health_bar = document.querySelector(".player2HealthbarFiller");
const player1_bullet_power=document.querySelector(".player1_bullet_power");
const player2_bullet_power=document.querySelector(".player2_bullet_power");
const player1Win=document.querySelector(".player1Win");
const player2Win=document.querySelector(".player2Win");
const message = document.querySelector(".message");
const rounds=document.querySelector(".round");

// Toggeler Funtion========================
function startGame() {
  
  const startGame=document.querySelector(".startGame");
  const resetGame=document.querySelector(".resetGame");
  const player1_container= document.querySelector(".player1_container");
  const player2_container= document.querySelector(".player2_container");
  const notice=document.querySelector(".notice");

  startGame.classList.toggle("hide");
  resetGame.classList.toggle("hide");
  player1_container.classList.toggle("hide");
  player2_container.classList.toggle("hide");
  notice.classList.toggle("hide");
  rounds.innerHTML=`Round : ${round}`;
  player1Win.innerHTML="Player 1-Won: 0";
  player2Win.innerHTML="Player 2-Won: 0";

}
function resetGame() {
  location.reload();
}
// ============================

// Final result display function=============
function final_result(params) {
  const player1_container= document.querySelector(".player1_container");
  const player2_container= document.querySelector(".player2_container");
  player1_container.classList.toggle("hide");
  player2_container.classList.toggle("hide");
  
}
// ===============================
// ======player1 health===========
const player1 = {
  health: 100,
};
// ========player2 health=========
const player2 = {
  health: 100,
};
const bullet = [0,1, 2, 3, 4, 5];

var round=1;

const player1_MatchCard={
  win:0
}
const player2_MatchCard={
  win:0

}

// ================Event Listener when player1 fires the bullet============
player1_fireBtn.addEventListener("click",()=>{
  const randombullet =bullet[Math.floor(Math.random() * bullet.length )];
  
  
  if(player2.health>=randombullet){
    player2.health=player2.health-randombullet;
  }
  else if(player2.health<randombullet|| player2.health==0){
    player2.health=0;
    player1_MatchCard.win=player1_MatchCard.win+1;
    if(round >=5){
      rounds.innerHTML=`Game Over! Result`;
      if(player1_MatchCard.win>player2_MatchCard.win){
        alert("player 1 win this game ");
        player2Win.innerHTML=`Player 2-Won: ${player2_MatchCard.win}`;
        player1Win.innerHTML=`Player 1-Won: ${player1_MatchCard.win}`;
        message.innerHTML=`player 1 won this match`;
        final_result();
  
      }
      else if(player1_MatchCard.win<player2_MatchCard.win){
        alert("player 2 win this game");
        player1Win.innerHTML=`Player 1-Won: ${player1_MatchCard.win}`;
        player2Win.innerHTML=`Player 2-Won: ${player2_MatchCard.win}`;
        message.innerHTML=`player 2 won this match`;
        final_result();
        
  
      }
      
    }
    else{
      if (round<=5){round=round+1;}
    player1.health=100;
    player2.health=100;
    alert("player 1 wins this round ");
    alert(`round ${round} started`);
    player1Win.innerHTML=`Player 1-Won: ${player1_MatchCard.win}`;
    rounds.innerHTML=`Round : ${round}`;
    
    playeer1_health_bar.style.width=`${player1.health}%`;
    
    playeer2_health_bar.style.width=`${player1.health}%`;

    }
    
    
   
  }
  
  player1_bullet_power.innerHTML=`Fire Power ${randombullet} !`;
  
  playeer2_health_bar.style.width=`${player2.health}%`;
  
  
  
  
  


})
// =======================================================================



// ============Event Listener when player 2 fires the bullete==========
player2_fireBtn.addEventListener("click",()=>{
  const randombullet =bullet[Math.floor(Math.random() * bullet.length )];
  if(player1.health>=randombullet){
    player1.health=player1.health-randombullet;
  }
  else if(player1.health<randombullet || player1.health==0 ){
    player1.health=0;
    player2_MatchCard.win=player2_MatchCard.win+1;
    if(round >=5){
      rounds.innerHTML=`Result`;
      if(player1_MatchCard.win>player2_MatchCard.win){
        alert("player 1 win this game");
        player1Win.innerHTML=`Player 1-Won: ${player1_MatchCard.win}`;
        player2Win.innerHTML=`Player 2-Won: ${player2_MatchCard.win}`;
        message.innerHTML=`player 1 won this match`;
        final_result();
  
      }
      else if(player1_MatchCard.win<player2_MatchCard.win){
        alert("player 2 win this game");
        player1Win.innerHTML=`Player 1-Won: ${player1_MatchCard.win}`;
        player2Win.innerHTML=`Player 2-Won: ${player2_MatchCard.win}`;
        message.innerHTML=`player 2 won this match`;
        final_result();
        
  
      }
      
    }
    else{
      if (round<=5){round=round+1;}
    player1.health=100;
    player2.health=100;
    alert("player 2 wins this round ");
    alert(`round ${round} started`);
    player2Win.innerHTML=`Player 2-Won: ${player2_MatchCard.win}`;
    rounds.innerHTML=`Round : ${round}`;
    
    playeer1_health_bar.style.width=`${player1.health}%`;
   
    playeer2_health_bar.style.width=`${player1.health}%`;

    }
    
    

  }
  player2_bullet_power.innerHTML=`power fired ${randombullet} !`;
  
  playeer1_health_bar.style.width=`${player1.health}%`;
 
  
})
// =======================================================================