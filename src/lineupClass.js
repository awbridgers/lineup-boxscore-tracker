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
    this.madeShotsFor = 0;
    this.madeShotsAgainst = 0;
    this.turnoversFor = 0;
    this.turnoversAgainst = 0;
  }
  get possFor(){
    return this.madeShotsAgainst + this.oRebFor + this.dRebFor + this.turnoversAgainst;
  }
  get possAgainst(){
    return this.madeShots + this.oRebAgainst + this.dRebAgainst + this.turnovers;
  }
  get totalReboundsFor(){
    return this.oRebFor + this.dRebFor;
  }
  get totalReboundsAgainst(){
    return this.oRebAgainst + this.dRebAgainst;
  }
}

export default Lineup
