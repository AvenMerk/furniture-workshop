const categories = (state = [], action) => {
    switch (action.type) {
      case 'ADD_CATEGORY_BUTTONS':
        return [
          ...state,
          ...action.json
        ]
      default:
        return state
    }
}
  
export default categories;
  