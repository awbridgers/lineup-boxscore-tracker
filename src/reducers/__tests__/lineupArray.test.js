import { lineupArray } from '../lineupArray.js';
import Lineup from '../../lineupClass.js';

const defaultArray = ['Brandon Childress','Sharone Wright','Chaundee Brown','Jaylen Hoard','Olivier Sarr']
const secondLineup = ['Ikenna Smart','Sharone Wright','Chaundee Brown','Jaylen Hoard','Olivier Sarr']
const defaultLineup = {
  players: ['Brandon Childress','Sharone Wright','Chaundee Brown','Jaylen Hoard','Olivier Sarr'],
  firstHalfArray: [1200],
  secondHalfArray:[],
  pointsFor: 0,
  pointsAgainst: 0,
  dRebFor: 0,
  dRebAgainst: 0,
  oRebFor: 0,
  oRebAgainst: 0,
  madeShots: 0,
  madeShotsAgainst: 0,
  turnovers: 0,
  turnoversAgainst: 0,
}
describe('lineupArray reducer',()=>{
  it('it returns the initial state',()=>{
    expect(lineupArray(undefined,{})).toEqual([])
  })
  it('adds lineup to the array',()=>{
    expect(lineupArray([],{type:'ADD_LINEUP', lineup: new Lineup(defaultArray, 1200, 1)})).toEqual(
      [
        {
          players: ['Brandon Childress','Sharone Wright','Chaundee Brown','Jaylen Hoard','Olivier Sarr'],
          firstHalfArray: [1200],
          secondHalfArray:[],
          pointsFor: 0,
          pointsAgainst: 0,
          dRebFor: 0,
          dRebAgainst: 0,
          oRebFor: 0,
          oRebAgainst: 0,
          madeShots: 0,
          madeShotsAgainst: 0,
          turnovers: 0,
          turnoversAgainst: 0,
        }
      ]
    )
    expect(lineupArray([defaultLineup],{type:'ADD_LINEUP', lineup: new Lineup(secondLineup,1200,2)})).toEqual(
      [
        {
          players: ['Brandon Childress','Sharone Wright','Chaundee Brown','Jaylen Hoard','Olivier Sarr'],
          firstHalfArray: [1200],
          secondHalfArray:[],
          pointsFor: 0,
          pointsAgainst: 0,
          dRebFor: 0,
          dRebAgainst: 0,
          oRebFor: 0,
          oRebAgainst: 0,
          madeShots: 0,
          madeShotsAgainst: 0,
          turnovers: 0,
          turnoversAgainst: 0,
        },
        {
          players: ['Ikenna Smart','Sharone Wright','Chaundee Brown','Jaylen Hoard','Olivier Sarr'],
          firstHalfArray: [],
          secondHalfArray:[1200],
          pointsFor: 0,
          pointsAgainst: 0,
          dRebFor: 0,
          dRebAgainst: 0,
          oRebFor: 0,
          oRebAgainst: 0,
          madeShots: 0,
          madeShotsAgainst: 0,
          turnovers: 0,
          turnoversAgainst: 0,
        }
      ]
    )
  })
  it('adds time to the lineup',()=>{
    expect(lineupArray([{
      players: ['Brandon Childress','Sharone Wright','Chaundee Brown','Jaylen Hoard','Olivier Sarr'],
      firstHalfArray: [1200],
      secondHalfArray:[],
      pointsFor: 0,
      pointsAgainst: 0,
      dRebFor: 0,
      dRebAgainst: 0,
      oRebFor: 0,
      oRebAgainst: 0,
      madeShots: 0,
      madeShotsAgainst: 0,
      turnovers: 0,
      turnoversAgainst: 0,
    },
    {
      players: ['Ikenna Smart','Sharone Wright','Chaundee Brown','Jaylen Hoard','Olivier Sarr'],
      firstHalfArray: [],
      secondHalfArray:[1200],
      pointsFor: 0,
      pointsAgainst: 0,
      dRebFor: 0,
      dRebAgainst: 0,
      oRebFor: 0,
      oRebAgainst: 0,
      madeShots: 0,
      madeShotsAgainst: 0,
      turnovers: 0,
      turnoversAgainst: 0,
    }],{type: 'ADD_TIME_TO_LINEUP', time:500, index:0, half: 1})).toEqual(
      [
        {
          players: ['Brandon Childress','Sharone Wright','Chaundee Brown','Jaylen Hoard','Olivier Sarr'],
          firstHalfArray: [1200,500],
          secondHalfArray:[],
          pointsFor: 0,
          pointsAgainst: 0,
          dRebFor: 0,
          dRebAgainst: 0,
          oRebFor: 0,
          oRebAgainst: 0,
          madeShots: 0,
          madeShotsAgainst: 0,
          turnovers: 0,
          turnoversAgainst: 0,
        },
        {
          players: ['Ikenna Smart','Sharone Wright','Chaundee Brown','Jaylen Hoard','Olivier Sarr'],
          firstHalfArray: [],
          secondHalfArray:[1200],
          pointsFor: 0,
          pointsAgainst: 0,
          dRebFor: 0,
          dRebAgainst: 0,
          oRebFor: 0,
          oRebAgainst: 0,
          madeShots: 0,
          madeShotsAgainst: 0,
          turnovers: 0,
          turnoversAgainst: 0,
        }
      ]
    )
    expect(lineupArray([
      {
        players: ['Brandon Childress','Sharone Wright','Chaundee Brown','Jaylen Hoard','Olivier Sarr'],
        firstHalfArray: [1200,500],
        secondHalfArray:[],
        pointsFor: 0,
        pointsAgainst: 0,
        dRebFor: 0,
        dRebAgainst: 0,
        oRebFor: 0,
        oRebAgainst: 0,
        madeShots: 0,
        madeShotsAgainst: 0,
        turnovers: 0,
        turnoversAgainst: 0,
      },
      {
        players: ['Ikenna Smart','Sharone Wright','Chaundee Brown','Jaylen Hoard','Olivier Sarr'],
        firstHalfArray: [],
        secondHalfArray:[1200],
        pointsFor: 0,
        pointsAgainst: 0,
        dRebFor: 0,
        dRebAgainst: 0,
        oRebFor: 0,
        oRebAgainst: 0,
        madeShots: 0,
        madeShotsAgainst: 0,
        turnovers: 0,
        turnoversAgainst: 0,
      }
    ],{type:'ADD_TIME_TO_LINEUP', time: 69, index:1, half:2})).toEqual(
      [
        {
          players: ['Brandon Childress','Sharone Wright','Chaundee Brown','Jaylen Hoard','Olivier Sarr'],
          firstHalfArray: [1200,500],
          secondHalfArray:[],
          pointsFor: 0,
          pointsAgainst: 0,
          dRebFor: 0,
          dRebAgainst: 0,
          oRebFor: 0,
          oRebAgainst: 0,
          madeShots: 0,
          madeShotsAgainst: 0,
          turnovers: 0,
          turnoversAgainst: 0,
        },
        {
          players: ['Ikenna Smart','Sharone Wright','Chaundee Brown','Jaylen Hoard','Olivier Sarr'],
          firstHalfArray: [],
          secondHalfArray:[1200,69],
          pointsFor: 0,
          pointsAgainst: 0,
          dRebFor: 0,
          dRebAgainst: 0,
          oRebFor: 0,
          oRebAgainst: 0,
          madeShots: 0,
          madeShotsAgainst: 0,
          turnovers: 0,
          turnoversAgainst: 0,
        }
      ]
    )
  })
})
