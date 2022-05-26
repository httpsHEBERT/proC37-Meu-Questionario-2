class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    
    question.hide(); 
    background(gatas);
    fill(0);
    textSize(30);
    text("RESULTADO:", 585, 50);
    Contestant.getPlayerInfo();
    if(allContestants !== undefined){
      debugger;
      var display_Answers = 230;
      fill(0);
      textSize(20);
      text("O jogador que respondeu correto é destacado na cor verde, e o que respondeu errado é destacado na cor vermelha.", 175, 580);

      for(var plr in allContestants){
        debugger;

        if (allContestants[plr].answer === "c" ||
            allContestants[plr].answer === "c)" ||
            allContestants[plr].answer === "C" ||
            allContestants[plr].answer === "C)"){
          fill("Green")
        }
        else{
          fill("red");
        }

        display_Answers+=35;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 620, display_Answers)
      }
    }
  }
}
