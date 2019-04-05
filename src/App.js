import React, { Component } from 'react';
import './App.css';
import roster from './roster.js';
import NamePlate from './components/namePlate.js';
import { connect } from 'react-redux';
import { removePlayer, addPlayer, updateTime, addLineup, addTimeToLineup } from './actions/index.js';
import { changeIndex, changeHalf, updatePlayByPlay } from './actions/index.js'
import Lineup from './lineupClass.js';
import equals from 'array-equal';

class App extends Component {
  addPlayer = (e) =>{
    let playerName = e.target.id;
    for(let i = 0; i< 5; i++){
      if(this.props.currentLineup[i] === ''){
        this.props.addPlayer(playerName, i);
        break;
      }
    }
  }
  removePlayer = (e) =>{
    const playerID = e.target.id;
    this.props.removePlayer(playerID);
  }
  changeTime = (e) =>{
    if(!isNaN(e.target.value)){
      this.props.updateTime(e.target.value);
    }
  }
  changeHalf = () =>{
    let newHalf = (this.props.half ===1) ? 2:1;
    this.props.changeHalf(newHalf)
  }
  endHalf = () =>{
    this.props.addTimeToLineup(0,this.props.lineupIndex, this.props.half);
    this.props.updateTime('2000');
    let newHalf = (this.props.half ===1) ? 2:1;
    this.props.changeHalf(newHalf);
  }
  submitLineup = () =>{
    const sortedPlayerArray = this.props.currentLineup.slice().sort();
    const oldIndex = this.props.lineupIndex;
    const time = this.fixTime(this.props.time);
    const arrayLength = this.props.lineupArray.length;
    //if its the first lineup of the game, create and push
    if(this.props.lineupArray.length === 0){
      let newLineup = new Lineup(sortedPlayerArray, time, this.props.half);
      this.props.addLineup(newLineup);
    }
    //if its not the first lineup, search the array for the lineup
    else{
      const newIndex = this.findLineup(sortedPlayerArray);
      //if the lineup does not exist, create it and push it to the array
      if(newIndex === -1){
        let newLineup = new Lineup(sortedPlayerArray, time, this.props.half);
        this.props.addLineup(newLineup);
        this.props.addTimeToLineup(time, oldIndex, this.props.half);
        this.props.changeIndex(arrayLength);
      }
      //if the lineup already exists, add the time to its time array
      else{
        if(time !== 0 && time!== 1200){
          this.props.addTimeToLineup(time, oldIndex, this.props.half);
        }
        this.props.addTimeToLineup(time, newIndex, this.props.half);
        this.props.changeIndex(newIndex);
      }
    }
  }
  fixTime = time =>{
    let value = null;
    let newTime = time.toString();
    if(time === "0"){
      value = 0;
    }
    else if(newTime.length < 3){
      value = parseInt(newTime,10);
    }
    else{
      let seconds = parseInt(newTime.substring(newTime.length-2,newTime.length),10);
      let minutes = parseInt(newTime.slice(0,-2),10);
      minutes = minutes * 60;
      value = minutes + seconds
    }
    return value;
  }
  findLineup = players => {
    let index = -1
    //cycle through each element of the lineupArray
    this.props.lineupArray.forEach((x,i) => {
      if(equals(x.players,players)){
        index = i
      }
    });
    return index;
  }
  updateText = (e) =>{
    this.props.updatePlayByPlay(e.target.value)
  }
  stringIncludes = string =>{
    let result = false;
    roster.forEach((name)=>{
      if(string.includes(name)){
        result = true;
      }
    })
    return result;
  }
  findTimeGap = (time,half) =>{
    //find the lineup that was on the court at time
    let array = (half === 1) ? 'firstHalfArray': 'secondHalfArray';
    let lineupArray = this.props.lineupArray;
    //loop through all the lineups that are in the lineup array
    for(let j = 0; j< lineupArray.length; j++){
      //then, for each lineup, loop through their time arrays
      const timeArray = lineupArray[j][array]
      for(let i =0; i< timeArray.length; i+=2){
        //if the time argument falls between the time pairs, lineup was on court
        if(timeArray[i] >= time && time > timeArray[i+1]){
          return j;
        }
      }
    }
    return -1;
  }
  test = () =>{
    const text = this.props.playByPlay;
    let firstHalfPlays = [];
    let secondHalfPlays = [];
    const test = text.split('2nd Half\ntime\tteam\tPLAY\tSCORE\n');
    const firstHalf = test[0].split('\n');
    firstHalf.forEach((line)=>{
      let plays = line.split('\t');
      let playObject = {time: this.fixTime(plays[0].replace(':','')), details: plays[2]}
      firstHalfPlays.push(playObject);
    })
    if(test.length > 1){
      const secondHalf = test[1].split('\n')
      secondHalfPlays.forEach((line)=>{
        let plays = line.split('\t');
        let playObject = {time: this.fixTime(plays[0].replace(':','')), details: plays[2]}
        firstHalfPlays.push(playObject);
      })
    }
    firstHalfPlays.forEach((play)=>{
      const timeGap = this.findTimeGap(play.time,1);
      console.log(timeGap);
      if(this.stringIncludes(play.details)){
        console.log('Wake Play')
      }
    })

  }
  render() {
    return (
      <div className="App">
        <div className = "container">
          <div className = "left">
            <div className = 'gameInfo'>
              <div className = 'time'>
                Time: <input style = {{width:"50px"}} type="text" name = 'time' value = {this.props.time} onChange = {this.changeTime}/>
                Half: {this.props.half}
              </div>
              <div className = "lineupInfo">
                <div className = "inTheGame">
                  <p>Current Lineup</p>
                  <NamePlate id = '0' name = {this.props.currentLineup[0]} onClick = {this.removePlayer}/>
                  <NamePlate id = '1' name = {this.props.currentLineup[1]} onClick = {this.removePlayer}/>
                  <NamePlate id = '2' name = {this.props.currentLineup[2]} onClick = {this.removePlayer}/>
                  <NamePlate id = '3' name = {this.props.currentLineup[3]} onClick = {this.removePlayer}/>
                  <NamePlate id = '4' name = {this.props.currentLineup[4]} onClick = {this.removePlayer}/>
                  <p><button className = "lineupSubmit" type = "button" onClick = {this.submitLineup}>Submit Lineup</button></p>
                </div>
                <div className = 'playerBank'>
                  <p>Available Players</p>
                  {roster.sort().map((player,i) => {
                    return(
                      player !== this.props.currentLineup[0] && player !== this.props.currentLineup[1] && player !== this.props.currentLineup[2] &&
                        player !== this.props.currentLineup[3] && player !== this.props.currentLineup[4] &&
                        <button  key = {i} onClick = {this.addPlayer} id = {player} type = 'button'>{player}</button>
                      )
                    })
                  }
                </div>
              </div>
            </div>
              <div className = 'resultsButtonContainer'>
                <div className = 'resultsButton'>
                <p><button type ='button' onClick = {this.endHalf}>End Half</button></p>
                <p><button type = "button" onClick = {this.changeHalf}>Change Half</button></p>
                <p><button type = "button">Finished</button></p>
                <p><button type = "button" onClick = {this.test}>Test</button></p>
              </div>
            </div>
          </div>
          <div className = 'right'>
            <textarea type = 'text' name = 'plays' value = {this.props.playByPlay} onChange = {this.updateText}
              placeholder = 'Enter play by play data here after you have finished tracking lineups'></textarea>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch =>({
  removePlayer: (ID) => dispatch(removePlayer(ID)),
  addPlayer: (name,ID) => dispatch(addPlayer(name,ID)),
  updateTime: (time)=> dispatch(updateTime(time)),
  addLineup: (lineup)=> dispatch(addLineup(lineup)),
  addTimeToLineup: (time, index, half)=> dispatch(addTimeToLineup(time,index,half)),
  changeIndex: (index) => dispatch(changeIndex(index)),
  changeHalf: (half) => dispatch(changeHalf(half)),
  updatePlayByPlay: (text) => dispatch(updatePlayByPlay(text)),

});
const mapStateToProps = store => ({
  currentLineup: store.currentLineup,
  time: store.time,
  lineupArray: store.lineupArray,
  lineupIndex: store.lineupIndex,
  half: store.half,
  playByPlay: store.playByPlay,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
