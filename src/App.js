import React, { Component } from 'react';
import './App.css';
import roster from './roster.js'
import NamePlate from './components/namePlate.js'
import { connect } from 'react-redux'
import { removePlayer, addPlayer } from './actions/index.js';

class App extends Component {
  addPlayer = (e) =>{
    let playerName = e.target.id;
    for(let i = 1; i< 6; i++){
      if(this.props[`player${i}`] === ''){
        this.props.addPlayer(playerName, i);
        break;
      }
    }
  }
  removePlayer = (e) =>{
    const playerID = e.target.id;
    this.props.removePlayer(playerID);
  }
  render() {
    return (
      <div className="App">
        <div className = "container">
          <div className = "left">
            <div className = 'gameInfo'>
              <div className = 'time'>
                Time: <input style = {{width:"50px"}} type="text" name = 'time'/>
              </div>
              <div className = "lineupInfo">
                <div className = "inTheGame">
                  <p>Current Lineup</p>
                  <NamePlate id = '1' name = {this.props.player1} onClick = {this.removePlayer}/>
                  <NamePlate id = '2' name = {this.props.player2} onClick = {this.removePlayer}/>
                  <NamePlate id = '3' name = {this.props.player3} onClick = {this.removePlayer}/>
                  <NamePlate id = '4' name = {this.props.player4} onClick = {this.removePlayer}/>
                  <NamePlate id = '5' name = {this.props.player5} onClick = {this.removePlayer}/>
                  <p><button className = "lineupSubmit" type = "button">Submit Lineup</button></p>
                </div>
                <div className = 'playerBank'>
                  <p>Available Players</p>
                  {roster.sort().map((player,i) => {
                    return(
                      player !== this.props.player1 && player !== this.props.player2 && player !== this.props.player3 &&
                        player !== this.props.player4 && player !== this.props.player5 &&
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

});
const mapStateToProps = store => ({
  player1: store.player1,
  player2: store.player2,
  player3: store.player3,
  player4: store.player4,
  player5: store.player5
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
