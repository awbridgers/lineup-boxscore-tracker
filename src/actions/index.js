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
