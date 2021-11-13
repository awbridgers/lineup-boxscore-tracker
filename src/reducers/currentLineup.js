export const currentLineup = (
  state = [
    "Isaiah Mucius",
    "Daivien Williamson",
    "Jake LaRavia",
    "Cameron Hildreth",
    "Dallas Walton",
  ],
  action
) => {
  switch (action.type) {
    case 'REMOVE_PLAYER':
      let newArray = state.slice();
      newArray[action.ID] = '';
      return newArray;
    case 'ADD_PLAYER':
      let addPlayerArray = state.slice();
      addPlayerArray[action.ID] = action.name;
      return addPlayerArray;
    default:
      return state;
  }
};
