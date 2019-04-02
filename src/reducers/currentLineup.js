

export const player1 = (state = 'Brandon Childress', action) =>{
  switch(action.type){
    case 'REMOVE_PLAYER_1':
      return ''
    case 'ADD_PLAYER_1':
      return action.name;
    default:
      return state;
  }
}

export const player2 = (state = 'Sharone Wright', action) =>{
  switch(action.type){
    case 'REMOVE_PLAYER_2':
      return ''
    case 'ADD_PLAYER_2':
      return action.name;
    default:
      return state;
  }
}

export const player3 = (state = 'Chaundee Brown', action) =>{
  switch(action.type){
    case 'REMOVE_PLAYER_3':
      return ''
    case 'ADD_PLAYER_3':
      return action.name;
    default:
      return state;
  }
}

export const player4 = (state = 'Jaylen Hoard', action) =>{
  switch(action.type){
    case 'REMOVE_PLAYER_4':
      return ''
    case 'ADD_PLAYER_4':
      return action.name;
    default:
      return state;
  }
}

export const player5 = (state = 'Olivier Sarr', action) =>{
  switch(action.type){
    case 'REMOVE_PLAYER_5':
      return ''
    case 'ADD_PLAYER_5':
      return action.name;
    default:
      return state;
  }
}
