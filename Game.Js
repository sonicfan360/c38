class Game{
    constructor()
    {}
    update(state){
        dataBase.ref("/").update({GameState:state})
    }
    getState()
    {
        var gameStateRef = dataBase.ref("GameState");
        gameStateRef.on("value", function(data)
        {gamestate = data.val();});
    }
 startGame(){
     if(gamestate === 0){
         player = new Player();
         player.getCount();
         form = new Form();
         form.display();
     }
   car1 = createSprite(100,200);
   car2 = createSprite(300,200);
   car3 = createSprite(500,200);
   car4 = createSprite(700,200);
   cars = [car1,car2,car3,car4];
 }
play()
{
    form.hideForm();
    // textSize(30);
    // text("Game Start", 120, 100);
    Player.getPlayerInfo();

    if(allPlayers!==undefined)
    {
    var index = 1
    var x = 200
    var y = 200
    
    for(var plr in allPlayers)
    {      
      cars[index-1].x=x;
      y=allPlayers[plr].distance
      cars[index-1].y=y
      index = index+1
      x = x+200
       if(index === player.index){
           cars[index-1].shapeColor= "red";
           camera.position.x = width/2;
           camera.position.y = cars[index-1].y;
       } 

    //     if(plr === "player" + player.index)
    //     {
    //         fill("red")
    //     }
    //     else
    //     {
    //         fill("black")
    //     }
    //     textSize(15)
    //   text(allPlayers[plr].Name + " : " + allPlayers[plr].distance, 120,displayYPosition ) 
    //   displayYPosition += 20;  
    }
    if(keyIsDown(UP_ARROW) && player.index!== null)
    {
      
        player.distance = player.distance + 50;
        player.update(); 
        
    }
  drawSprites();
}
}

}