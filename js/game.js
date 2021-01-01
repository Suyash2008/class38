class Game{
    constructor(){
        
    }
    getState(){
        database.ref('gameState').on("value",(data)=>{
            gameState = data.val()
        })
    }
    updateState(state){
        database.ref('/').update({gameState:state})
    }
    async start(){
     if(gameState === 0){
        player = new Player()
        var PlayerCountref = await database.ref('playerCount').once("value");
        if(PlayerCountref.exists()){
            playerCount = PlayerCountref.val()
            player.getCount()
        }
        form = new Form();
        form.display();
     }   
     car1 = createSprite(100,200,20,20)
     car2 = createSprite(300,200,20,20)
     car3 = createSprite(500,200,20,20)
     car4 = createSprite(700,200,20,20)
     cars = [car1,car2,car3,car4]
    }

    play(){
        form.hide();
        Player.getPlayerInfo();

        if(allPlayers!==undefined){
            var index = 0
            var x = 175
            var y;

            for(var plr in allPlayers){
                index = index + 1
                x = x + 200;
                y = displayHeight - allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
                
                if(index = player.index){
                    stroke(8)
                    fill("yellow")
                    ellipse(x,y,60,60);
                    camera.position.x = displayWidth/2
                    camera.position.y = cars[index-1].y
                }
            }
            
            
        }
        if(keyIsDown(UP_ARROW)&&player.index !== null){
            player.distance = player.distance + 20
            console.log(player.distance)
            player.update()
        }
        
        drawSprites();
    }
    end(){
        game.update(2)
    }
}