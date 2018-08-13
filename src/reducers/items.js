const items = (state = [], action) => {
  switch (action.type) {
    case 'ADD_JSON':
      return [
        ...state,
        ...action.json
      ]
    default:
      return state
  }
}

export default items
