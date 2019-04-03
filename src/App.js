import React, { Component } from 'react';
import './App.css';
import roster from './roster.js'
import NamePlate from './components/namePlate.js'
import { connect } from 'react-redux'
import { removePlayer, addPlayer, updateTime } from './actions/index.js';
import Lineup from './lineupClass.js';

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
  submitLineup = () =>{

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
  render() {
    return (
      <div className="App">
        <div className = "container">
          <div className = "left">
            <div className = 'gameInfo'>
              <div className = 'time'>
                Time: <input style = {{width:"50px"}} type="text" name = 'time' value = {this.props.time} onChange = {this.changeTime}/>
              </div>
              <div className = "lineupInfo">
                <div className = "inTheGame">
                  <p>Current Lineup</p>
                  <NamePlate id = '0' name = {this.props.currentLineup[0]} onClick = {this.removePlayer}/>
                  <NamePlate id = '1' name = {this.props.currentLineup[1]} onClick = {this.removePlayer}/>
                  <NamePlate id = '2' name = {this.props.currentLineup[2]} onClick = {this.removePlayer}/>
                  <NamePlate id = '3' name = {this.props.currentLineup[3]} onClick = {this.removePlayer}/>
                  <NamePlate id = '4' name = {this.props.currentLineup[4]} onClick = {this.removePlayer}/>
                  <p><button className = "lineupSubmit" type = "button">Submit Lineup</button></p>
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

});
const mapStateToProps = store => ({
  currentLineup: store.currentLineup,
  time: store.time,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
