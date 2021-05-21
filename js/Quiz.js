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
    //write code here to hide question elements
   question.hide();
   

    //write code to change the background color here
    background("purple");
    fill("black");
    textSize(30);
    text("Result of the Quizz",340,50);
    text("---------------------------", 320,65);
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();
    
  
    //write condition to check if contestantInfor is not undefined
    //write code to add a note here
    if(allContestants !== undefined){
      fill("blue");
      textSize(20);
      text("Note: Contestant who answered correct is highlighted in green colour!" ,130,230)
      var distance_answers = 230;
      //write code to highlight contest who answered correctly
    for(var plr in allContestants){
     
      var correctAns="2";
      if(correctAns===allContestants[plr].answer)
      fill("green");
      else
      fill("red");

      distance_answers=distance_answers+30;
  
      textSize(20);
      text(allContestants[plr].name+ ":" + allContestants[plr].answer, 250,distance_answers);
      console.log(distance_answers);
      }
      }
    }
    
    //write code to show a heading for showing the result of Quiz
  
  }


