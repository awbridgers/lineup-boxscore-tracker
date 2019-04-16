export const removePlayer = ID =>({
  type: 'REMOVE_PLAYER',
  ID
})

export const addPlayer = (name, ID) =>({
  type: 'ADD_PLAYER',
  name,
  ID
})

export const updateTime = time =>({
  type: 'UPDATE_TIME',
  newTime: time
})

export const addLineup = lineup =>({
  type: 'ADD_LINEUP',
  lineup
})

export const addTimeToLineup = (time, index, half) =>({
    type: 'ADD_TIME_TO_LINEUP',
    time,
    index,
    half,
})

export const changeIndex = index =>({
  type: 'CHANGE_INDEX',
  index
})

export const changeHalf = half => ({
  type: 'CHANGE_HALF',
  half
})

export const updatePlayByPlay = text =>({
  type: 'UPDATE_PLAY_BY_PLAY',
  text,
})


export const updatePoints =(type, index, wakePlay, assisted) =>({
  type,
  index,
  wakePlay,
  assisted
})

export const updateMissedShots = (type, index, wakePlay) =>({
  type,
  index,
  wakePlay
})

export const updateRebounds = (type, index, wakePlay) =>({
  type,
  index,
  wakePlay
})

export const updateTurnovers = (index, wakePlay) =>({
  type: 'ADD_TURNOVER',
  index,
  wakePlay
})

export const changeResults = () =>({
  type: 'CHANGE_SHOW_RESULTS'
})
