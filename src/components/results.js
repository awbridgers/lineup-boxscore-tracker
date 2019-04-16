import React from 'react'
const Results = (props) =>(
  <div className = 'reportDiv'>
    <button type = "button" onClick = {props.changeResults}>Back</button>
    <table className = "report">
      <tbody>
        <tr>
          <th id = 'lineupTH'>Lineup</th>
          <th>Time</th>
          <th>PF</th>
          <th>PA</th>
          <th>DRF</th>
          <th>DRA</th>
          <th>ORF</th>
          <th>ORA</th>
          <th>2PMF</th>
          <th>2PAF</th>
          <th>2PMA</th>
          <th>2PAA</th>
          <th>3PMF</th>
          <th>3PAF</th>
          <th>3PMA</th>
          <th>3PAA</th>
          <th>AF</th>
          <th>AA</th>
          <th>TOF</th>
          <th>TOA</th>
          <th>PossF</th>
          <th>PossA</th>
        </tr>
        {props.lineupArray.map((lineup, i)=>{
          return (
            <tr key ={i}>
              <td>{lineup.players.join('-')}</td>
              <td>{props.getTime(lineup)}</td>
              <td>{lineup.pointsFor}</td>
              <td>{lineup.pointsAgainst}</td>
              <td>{lineup.dRebFor}</td>
              <td>{lineup.dRebAgainst}</td>
              <td>{lineup.oRebFor}</td>
              <td>{lineup.oRebAgainst}</td>
              <td>{lineup.madeTwosFor}</td>
              <td>{lineup.madeTwosFor+lineup.missedTwosFor}</td>
              <td>{lineup.madeTwosAgainst}</td>
              <td>{lineup.madeTwosAgainst + lineup.missedTwosAgainst}</td>
              <td>{lineup.madeThreesFor}</td>
              <td>{lineup.madeThreesFor + lineup.missedThreesFor}</td>
              <td>{lineup.madeThreesAgainst}</td>
              <td>{lineup.madeThreesAgainst + lineup.missedThreesAgainst}</td>
              <td>{lineup.assistsFor}</td>
              <td>{lineup.assistsAgainst}</td>
              <td>{lineup.turnoversFor}</td>
              <td>{lineup.turnoversAgainst}</td>
              <td>PossF</td>
              <td>PossA</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
)

export default Results
