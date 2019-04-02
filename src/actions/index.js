export const removePlayer = ID =>({
  type: `REMOVE_PLAYER_${ID}`,
})

export const addPlayer = (name, ID) =>({
  type: `ADD_PLAYER_${ID}`,
  name
})
