class Player{
     constructor(){
          this.index = null;
          this.distance = 0;
          this.name = null;
     }

     getPlayerCount(){
          database.ref('playerCount').on("value", (data)=> {
               playerCount = data.val();
          });
     }

     updatePlayerCount(count){
          database.ref('/').update({playerCount : count});
     }

     updatePlayerProfile(){
          database.ref('players/player' + this.index).set({playerName : this.name, Distance : this.distance});
     }

     static readPlayerInfo(){
          database.ref('players').on('value', (data) =>{
               AllPlayerInfo = data.val();
               
          })
     }
}