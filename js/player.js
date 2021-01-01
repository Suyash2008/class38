class Player{
    constructor(){
    this.rank = null;
    this.name = null;
    this.distance = 0;
    this.index = null;

    }
    getCount(){
        database.ref('playerCount').on("value",(data)=>{
            playerCount = data.val()
        })
    }
    updateCount(count){
        database.ref('/').update({playerCount:count})

    }
    static getPlayerInfo(){
         database.ref('players').on("value",(data)=>{
            allPlayers = data.val()
        })
    }
    update(){
        var playerIndex = 'players/player'+this.index
        database.ref(playerIndex).set({
            name:this.name,distance:this.distance
        })

    }


}