class Lineup {
  constructor(players, time, half){
    this.players = players;
    if(half ===1){
      this.firstHalfArray = [time];
      this.secondHalfArray =[];
    }
    else if(half ===2){
      this.firstHalfArray = [];
      this.secondHalfArray = [time]
    }
    this.pointsFor = 0;
    this.pointsAgainst = 0;
    this.dRebFor = 0;
    this.dRebAgainst = 0;
    this.oRebFor = 0;
    this.oRebAgainst = 0;
    this.madeTwosFor = 0;
    this.missedTwosFor = 0;
    this.madeTwosAgainst = 0;
    this.missedTwosAgainst = 0;
    this.madeThreesFor = 0
    this.madeThreesAgainst = 0;
    this.missedThreesFor = 0;
    this.missedThreesAgainst = 0;
    this.turnoversFor = 0;
    this.turnoversAgainst = 0;
    this.assistsFor = 0;
    this.assistsAgainst = 0;
  }

}

export default Lineup
