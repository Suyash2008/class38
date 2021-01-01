class Form{
    constructor(){
        this.input = createInput("Name");
        this.button1 = createButton("Play");
        this.button2 = createButton("reset");
        this.title = createElement("h1");
        this.greeting = createElement("h2");
    }
    display(){
        this.title.html("Car Racing Game")
        this.title.position(displayWidth/2-100,50)
        this.input.position(displayWidth/2-100,displayHeight/2-50)
        this.button1.position(displayWidth/2-100,displayHeight/2+50)
        this.button2.position(displayWidth-100,50)
        this.button1.mousePressed(()=>{
            this.input.hide()
            this.button1.hide()
            player.name = this.input.value()
            playerCount = playerCount + 1
            player.updateCount(playerCount);
            player.update()
            this.greeting.html("Welcome To The Car Racing Game " + player.name)
            this.greeting.position(displayWidth/2-100,displayHeight/2)
        })
        this.button2.mousePressed(()=>{
            game.updateState(0)
            player.updateCount(0)
        })
    }
    hide(){
        this.input.hide()
        this.button1.hide()
        this.greeting.hide()
        this.title.hide()
    }
}