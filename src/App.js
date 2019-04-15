import React, { Component } from 'react';
import './App.css';
import roster from './roster.js';
import NamePlate from './components/namePlate.js';
import { connect } from 'react-redux';
import { removePlayer, addPlayer, updateTime, addLineup, addTimeToLineup } from './actions/index.js';
import { changeIndex, changeHalf, updatePlayByPlay, updatePoints } from './actions/index.js';
import { updateMissedShots, updateRebounds, updateTurnovers} from './actions/index.js'
import Lineup from './lineupClass.js';
import equals from 'array-equal';

export class App extends Component {
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
    //if the play includes Wake Forest, its a Wake team play, so include that
    //i.e. 'Wake Forest Offensive Rebound'
    let result = (string.includes('Wake Forest')) ? true : false;
    roster.forEach((name)=>{
      if(string.includes(name)){
        result = true;
      }
    })
    return result;
  }
  findTimeGap = (time,half) =>{
    //find the lineup that was on the court at time
    let array;
    if(half === 1){
      array = 'firstHalfArray';
    }
    else if(half === 2){
      array = 'secondHalfArray'
    }
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
  parseData = () =>{
    const text = this.props.playByPlay;
    let firstHalfPlays = [];
    let secondHalfPlays = [];
    //split play by play into halves
    const separateHalves = text.split('\n2nd Half\ntime\tteam\tPLAY\tSCORE\n');
    //if the first half exists
    if(separateHalves.length>0){
      //split by new line character and loop through
      separateHalves[0].split('\n').forEach((line)=>{
        //split each line into its 3 components (time, play, score)
        let play = line.split('\t')
        if(typeof play[2]!== 'undefined'){
          firstHalfPlays.push({
            time: this.fixTime(play[0].replace(':','')),
            details: play[2]
          })
        }
      })
    }
    //if the second half exists, repeat the process
    if(separateHalves.length>1){
      separateHalves[1].split('\n').forEach((line)=>{
        let play = line.split('\t');
        if(typeof play[2]!== 'undefined'){
          secondHalfPlays.push({
            time: this.fixTime(play[0].replace(':','')),
            details: play[2]
          })
        }
      })
    }
    return {firstHalfPlays, secondHalfPlays}
  }
  test = () =>{
    const {firstHalfPlays, secondHalfPlays} = this.parseData();
    //combine the 2 arrays with a separator
    const playArray = [...firstHalfPlays,'HALF',...secondHalfPlays]
    let half = 1;

    playArray.forEach((play)=>{
      //if the play is the separator, switch half to 2 to search 2nd half times
      if(play === 'HALF'){
        half = 2;
      }
      else{
        const index = this.findTimeGap(play.time, half);
        if(index !== -1){
          const wakePlay = this.stringIncludes(play.details);
          const details = play.details.toLowerCase();
          let tempLineup = {...this.props.lineupArray[index]};
          //if the play involves a wake player
          if(wakePlay){
            //if a basket was made
            if(details.includes('made')){
              let assisted = false;
              if(details.includes('assist')){
                assisted = true;
              }
              if(details.includes('free throw')){
                this.props.updatePoints(
                  'ADD_FREE_THROW',
                  index,
                  wakePlay,
                  assisted
                );
              }
              else if(details.includes('three point')){
                this.props.updatePoints(
                  'ADD_THREE_POINTER',
                  index,
                  wakePlay,
                  assisted
                );
              }
              else{
                this.props.updatePoints(
                  'ADD_TWO_POINTER',
                  index,
                  wakePlay,
                  assisted
                );
              }
            }
            //if the basket was missed
            else if(details.includes('missed')){
              if(details.includes('free throw')){
                //Nothing, not tracking FT%
              }
              else if(details.includes('three point')){
              }
              else{
                //console.log('missed 2 pointer')
              }
            }
            else if(details.includes('defensive rebound')){
              this.props.updateRebounds('ADD_DEFENSIVE_REBOUND', index, wakePlay)
            }
            else if(details.includes('offensive rebound')){
              this.props.updateRebounds('ADD_OFFENSIVE_REBOUND', index, wakePlay)
            }
            else if(details.includes('turnover')){
              this.props.updateTurnovers(index, wakePlay)
            }
          }
          else{
            //not a wake play
            if(details.includes('made')){
              if(details.includes('free throw')){
                //console.log('made Free Throw')
              }
              else if(details.includes('three point')){
                //console.log('made Three Pointer');
              }
              else{
                //console.log('made 2 pointer')
              }
              //if the basket was assisted
              if(details.includes('assist')){
                //console.log('assist')
              }
            }
            else if(details.includes('missed')){
              if(details.includes('free throw')){
                //console.log('missed free throw')
              }
              else if(details.includes('three point')){
                //console.log('missed Three Pointer');
              }
              else{
                //console.log('missed 2 pointer')
              }
            }
            else if(details.includes('defensive rebound')){
              //console.log('Defensive Rebound')
            }
            else if(details.includes('offensive rebound')){
              //console.log('Offensive Rebound')
            }
            else if(details.includes('turnover')){
              //console.log('turnover');
            }
          }
        }
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
                <p><button type = "button">Show Results</button></p>
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
  updatePoints: (type,index, wakePlay, assisted)=> dispatch(updatePoints(type, index, wakePlay, assisted)),
  updateMissedShots: (type,index,wakePlay)=> dispatch(updateMissedShots(type,index, wakePlay)),
  updateRebounds: (type, index, wakePlay)=> dispatch(updateRebounds(type,index,wakePlay)),
  updateTurnovers: (index, wakePlay) => dispatch(updateTurnovers(index,wakePlay))

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
