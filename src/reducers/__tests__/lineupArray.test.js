import { lineupArray } from '../lineupArray.js';
import Lineup from '../../lineupClass.js';

const defaultArray = ['Brandon Childress','Sharone Wright','Chaundee Brown','Jaylen Hoard','Olivier Sarr']
const secondLineup = ['Ikenna Smart','Sharone Wright','Chaundee Brown','Jaylen Hoard','Olivier Sarr']
const defaultLineup = {
  players: ['Brandon Childress','Sharone Wright','Chaundee Brown','Jaylen Hoard','Olivier Sarr'],
  firstHalfArray: [1200,0],
  secondHalfArray:[1200,0],
  pointsFor: 0,
  pointsAgainst: 0,
  dRebFor: 0,
  dRebAgainst: 0,
  oRebFor: 0,
  oRebAgainst: 0,
  madeTwosFor: 0,
  madeTwosAgainst: 0,
  turnoversFor: 0,
  turnoversAgainst: 0,
  missedTwosFor : 0,
  missedTwosAgainst : 0,
  madeThreesFor : 0,
  madeThreesAgainst : 0,
  missedThreesFor : 0,
  missedThreesAgainst : 0,
  assistsFor: 0,
  assistsAgainst: 0,
  FTAfor: 0,
  FTAagainst: 0
}
const anotherLineup = {
    players: ['Ikenna Smart','Sharone Wright','Chaundee Brown','Jaylen Hoard','Olivier Sarr'],
    firstHalfArray: [],
    secondHalfArray:[1200],
    pointsFor: 0,
    pointsAgainst: 0,
    dRebFor: 0,
    dRebAgainst: 0,
    oRebFor: 0,
    oRebAgainst: 0,
    madeTwosFor: 0,
    madeTwosAgainst: 0,
    turnoversFor: 0,
    turnoversAgainst: 0,
    missedTwosFor : 0,
    missedTwosAgainst : 0,
    madeThreesFor : 0,
    madeThreesAgainst : 0,
    missedThreesFor : 0,
    missedThreesAgainst : 0,
    assistsFor: 0,
    assistsAgainst: 0,
    FTAfor: 0,
    FTAagainst: 0
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
          madeTwosFor: 0,
          madeTwosAgainst: 0,
          turnoversFor: 0,
          turnoversAgainst: 0,
          missedTwosFor : 0,
          missedTwosAgainst : 0,
          madeThreesFor : 0,
          madeThreesAgainst : 0,
          missedThreesFor : 0,
          missedThreesAgainst : 0,
          assistsFor: 0,
          assistsAgainst: 0,
          FTAfor: 0,
          FTAagainst: 0
        }
      ]
    )
    expect(lineupArray([defaultLineup],{type:'ADD_LINEUP', lineup: new Lineup(secondLineup,1200,2)})).toEqual(
      [
        {
          players: ['Brandon Childress','Sharone Wright','Chaundee Brown','Jaylen Hoard','Olivier Sarr'],
          firstHalfArray: [1200,0],
          secondHalfArray:[1200,0],
          pointsFor: 0,
          pointsAgainst: 0,
          dRebFor: 0,
          dRebAgainst: 0,
          oRebFor: 0,
          oRebAgainst: 0,
          madeTwosFor: 0,
          madeTwosAgainst: 0,
          turnoversFor: 0,
          turnoversAgainst: 0,
          missedTwosFor : 0,
          missedTwosAgainst : 0,
          madeThreesFor : 0,
          madeThreesAgainst : 0,
          missedThreesFor : 0,
          missedThreesAgainst : 0,
          assistsFor: 0,
          assistsAgainst: 0,
          FTAfor: 0,
          FTAagainst: 0
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
          madeTwosFor: 0,
          madeTwosAgainst: 0,
          turnoversFor: 0,
          turnoversAgainst: 0,
          missedTwosFor : 0,
          missedTwosAgainst : 0,
          madeThreesFor : 0,
          madeThreesAgainst : 0,
          missedThreesFor : 0,
          missedThreesAgainst : 0,
          assistsFor: 0,
          assistsAgainst: 0,
          FTAfor: 0,
          FTAagainst: 0
        }
      ]
    )
  })
  it('adds time to the lineup',()=>{
    expect(lineupArray([defaultLineup, anotherLineup],{type: 'ADD_TIME_TO_LINEUP', time:500, index:0, half: 1})).toEqual(
      [
        {
          players: ['Brandon Childress','Sharone Wright','Chaundee Brown','Jaylen Hoard','Olivier Sarr'],
          firstHalfArray: [1200,0,500],
          secondHalfArray:[1200,0],
          pointsFor: 0,
          pointsAgainst: 0,
          dRebFor: 0,
          dRebAgainst: 0,
          oRebFor: 0,
          oRebAgainst: 0,
          madeTwosFor: 0,
          madeTwosAgainst: 0,
          turnoversFor: 0,
          turnoversAgainst: 0,
          missedTwosFor : 0,
          missedTwosAgainst : 0,
          madeThreesFor : 0,
          madeThreesAgainst : 0,
          missedThreesFor : 0,
          missedThreesAgainst : 0,
          assistsFor: 0,
          assistsAgainst: 0,
          FTAfor: 0,
          FTAagainst: 0
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
          madeTwosFor: 0,
          madeTwosAgainst: 0,
          turnoversFor: 0,
          turnoversAgainst: 0,
          missedTwosFor : 0,
          missedTwosAgainst : 0,
          madeThreesFor : 0,
          madeThreesAgainst : 0,
          missedThreesFor : 0,
          missedThreesAgainst : 0,
          assistsFor: 0,
          assistsAgainst: 0,
          FTAfor: 0,
          FTAagainst: 0
        }
      ]
    )
    expect(lineupArray([defaultLineup, anotherLineup],{type:'ADD_TIME_TO_LINEUP', time: 69, index:1, half:2})).toEqual(
      [
        {
          players: ['Brandon Childress','Sharone Wright','Chaundee Brown','Jaylen Hoard','Olivier Sarr'],
          firstHalfArray: [1200,0],
          secondHalfArray:[1200,0],
          pointsFor: 0,
          pointsAgainst: 0,
          dRebFor: 0,
          dRebAgainst: 0,
          oRebFor: 0,
          oRebAgainst: 0,
          madeTwosFor: 0,
          madeTwosAgainst: 0,
          turnoversFor: 0,
          turnoversAgainst: 0,
          missedTwosFor : 0,
          missedTwosAgainst : 0,
          madeThreesFor : 0,
          madeThreesAgainst : 0,
          missedThreesFor : 0,
          missedThreesAgainst : 0,
          assistsFor: 0,
          assistsAgainst: 0,
          FTAfor: 0,
          FTAagainst: 0
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
          madeTwosFor: 0,
          madeTwosAgainst: 0,
          turnoversFor: 0,
          turnoversAgainst: 0,
          missedTwosFor : 0,
          missedTwosAgainst : 0,
          madeThreesFor : 0,
          madeThreesAgainst : 0,
          missedThreesFor : 0,
          missedThreesAgainst : 0,
          assistsFor: 0,
          assistsAgainst: 0,
          FTAfor: 0,
          FTAagainst: 0
        }
      ]
    )
  })
  it('adds a freethrow to the lineup',()=>{
    expect(lineupArray([defaultLineup],{
      type:'ADD_FREE_THROW',
      index:0, wakePlay:true,
      assisted:false
    })).toEqual([
      {
        ...defaultLineup, pointsFor: defaultLineup.pointsFor+1, FTAfor: 1
      }]
    )
    expect(lineupArray([defaultLineup,anotherLineup],{
      type:'ADD_FREE_THROW',
      index:0, wakePlay: false, assisted: false})).toEqual([
        {
          ...defaultLineup, pointsAgainst : defaultLineup.pointsAgainst + 1, FTAagainst: 1
        },
        anotherLineup
      ]
    )
  })
  it('adds a two pointer to the lineup with assist',()=>{
    expect(lineupArray([defaultLineup,anotherLineup], {
      type: 'ADD_TWO_POINTER',
      index:0,
      wakePlay: true,
      assisted: true
    })).toEqual([
      {
        ...defaultLineup, pointsFor: defaultLineup.pointsFor + 2,
        assistsFor: defaultLineup.assistsFor + 1,
        madeTwosFor: defaultLineup.madeTwosFor + 1
      },
      anotherLineup
    ])
    expect(lineupArray([defaultLineup,anotherLineup], {
      type: 'ADD_TWO_POINTER',
      index:0,
      wakePlay: false,
      assisted: true
    })).toEqual([
      {
        ...defaultLineup, pointsAgainst: defaultLineup.pointsAgainst + 2,
        assistsAgainst: defaultLineup.assistsAgainst + 1,
        madeTwosAgainst: defaultLineup.madeTwosAgainst + 1
      },
      anotherLineup
    ])
  })
  it('adds a two pointer to the lineup without an assist',()=>{
    expect(lineupArray([defaultLineup,anotherLineup], {
      type: 'ADD_TWO_POINTER',
      index:0,
      wakePlay: true,
      assisted: false
    })).toEqual([
      {
        ...defaultLineup, pointsFor: defaultLineup.pointsFor + 2,
        madeTwosFor: defaultLineup.madeTwosFor + 1
      },
      anotherLineup
    ])
    expect(lineupArray([defaultLineup,anotherLineup], {
      type: 'ADD_TWO_POINTER',
      index:0,
      wakePlay: false,
      assisted: false
    })).toEqual([
      {
        ...defaultLineup, pointsAgainst: defaultLineup.pointsAgainst + 2,
        madeTwosAgainst: defaultLineup.madeTwosAgainst + 1
      },
      anotherLineup
    ])
  })
  it('adds a three pointer to the lineup with assist',()=>{
    expect(lineupArray([defaultLineup, anotherLineup], {
      type: 'ADD_THREE_POINTER',
      index:0,
      wakePlay: true,
      assisted: true
    })).toEqual([
      {
        ...defaultLineup, pointsFor: defaultLineup.pointsFor + 3,
        assistsFor: defaultLineup.assistsFor + 1,
        madeThreesFor: defaultLineup.madeThreesFor + 1
      },
      anotherLineup
    ])
    expect(lineupArray([defaultLineup,anotherLineup], {
      type: 'ADD_THREE_POINTER',
      index:0,
      wakePlay: false,
      assisted: true
    })).toEqual([
      {
        ...defaultLineup, pointsAgainst: defaultLineup.pointsAgainst + 3,
        assistsAgainst: defaultLineup.assistsAgainst + 1,
        madeThreesAgainst: defaultLineup.madeThreesAgainst + 1
      },
      anotherLineup
    ])
  })
  it('adds a three pointer to the lineup without an assist',()=>{
    expect(lineupArray([defaultLineup,anotherLineup], {
      type: 'ADD_THREE_POINTER',
      index:0,
      wakePlay: true,
      assisted: false
    })).toEqual([
      {
        ...defaultLineup, pointsFor: defaultLineup.pointsFor + 3,
        madeThreesFor: defaultLineup.madeThreesFor + 1
      },
      anotherLineup
    ])
    expect(lineupArray([defaultLineup,anotherLineup], {
      type: 'ADD_THREE_POINTER',
      index:0,
      wakePlay: false,
      assisted: false
    })).toEqual([
      {
        ...defaultLineup, pointsAgainst: defaultLineup.pointsAgainst + 3,
        madeThreesAgainst: defaultLineup.madeThreesAgainst + 1
      },
      anotherLineup
    ])
  })
  it('adds offensive rebounds for and against',()=>{
    expect(lineupArray([defaultLineup,anotherLineup],{
      type: 'ADD_OFFENSIVE_REBOUND',
      index: 0,
      wakePlay: true
    })).toEqual([
      {
        ...defaultLineup,oRebFor: defaultLineup.oRebFor +1
      },
      anotherLineup
    ]);
    expect(lineupArray([defaultLineup,anotherLineup],{
      type: 'ADD_OFFENSIVE_REBOUND',
      index: 0,
      wakePlay: false
    })).toEqual([
      {
        ...defaultLineup,oRebAgainst: defaultLineup.oRebAgainst +1
      },
      anotherLineup
    ])
  })
  it('adds defensive rebounds for and against',()=>{
    expect(lineupArray([defaultLineup,anotherLineup],{
      type: 'ADD_DEFENSIVE_REBOUND',
      index: 0,
      wakePlay: true
    })).toEqual([
      {
        ...defaultLineup,dRebFor: defaultLineup.dRebFor +1
      },
      anotherLineup
    ]);
    expect(lineupArray([defaultLineup,anotherLineup],{
      type: 'ADD_DEFENSIVE_REBOUND',
      index: 0,
      wakePlay: false
    })).toEqual([
      {
        ...defaultLineup,dRebAgainst: defaultLineup.dRebAgainst +1
      },
      anotherLineup
    ])
  })
  it('adds turnovers for both teams',()=>{
    expect(lineupArray([defaultLineup,anotherLineup],{
      type:'ADD_TURNOVER',
      index: 0,
      wakePlay: true
    })).toEqual([
      {
        ...defaultLineup, turnoversFor: defaultLineup.turnoversFor + 1
      },
      anotherLineup
    ])
    expect(lineupArray([defaultLineup,anotherLineup],{
      type:'ADD_TURNOVER',
      index: 0,
      wakePlay: false
    })).toEqual([
      {
        ...defaultLineup, turnoversAgainst: defaultLineup.turnoversAgainst + 1
      },
      anotherLineup
    ])
  })
  it('adds missed two pointer for both teams',()=>{
    expect(lineupArray([defaultLineup,anotherLineup],{
      type: 'ADD_MISSED_TWO_POINTER',
      index :0,
      wakePlay: true
    })).toEqual([
      {
        ...defaultLineup, missedTwosFor: defaultLineup.missedTwosFor + 1
      },
      anotherLineup
    ])
    expect(lineupArray([defaultLineup,anotherLineup],{
      type: 'ADD_MISSED_TWO_POINTER',
      index :0,
      wakePlay: false
    })).toEqual([
      {
        ...defaultLineup, missedTwosAgainst: defaultLineup.missedTwosAgainst + 1
      },
      anotherLineup
    ])
  })
  it('adds missed three pointer for both teams',()=>{
    expect(lineupArray([defaultLineup,anotherLineup],{
      type: 'ADD_MISSED_THREE_POINTER',
      index :0,
      wakePlay: true
    })).toEqual([
      {
        ...defaultLineup, missedThreesFor: defaultLineup.missedThreesFor + 1
      },
      anotherLineup
    ])
    expect(lineupArray([defaultLineup,anotherLineup],{
      type: 'ADD_MISSED_THREE_POINTER',
      index :0,
      wakePlay: false
    })).toEqual([
      {
        ...defaultLineup, missedThreesAgainst: defaultLineup.missedThreesAgainst + 1
      },
      anotherLineup
    ])
  })
  it('adds free throw attempts for both teams',()=>{
    expect(lineupArray([defaultLineup,anotherLineup],{
      type: 'ADD_MISSED_FREE_THROW',
      index :0,
      wakePlay: false
    })).toEqual([{
      ...defaultLineup, FTAagainst: defaultLineup.FTAagainst + 1
    },
    anotherLineup])
    expect(lineupArray([defaultLineup,anotherLineup],{
      type: 'ADD_MISSED_FREE_THROW',
      index :0,
      wakePlay: true
    })).toEqual([{
      ...defaultLineup, FTAfor: defaultLineup.FTAfor + 1
    },
    anotherLineup])
  })
  it('uploads a lineup',()=>{
    expect(lineupArray(defaultLineup,{
      type: 'UPLOAD_LINEUP',
      array: [anotherLineup]
    })).toEqual([anotherLineup])
  })
})
