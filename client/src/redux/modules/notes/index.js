const addNote = 'NOTES/ADD_NOTE'

const initialState = {
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case addNote:
      return {
        ...state,
        list: [...state.list, action.payload]
      }
    default:
      return state
  }
}

export const onAddNote = note => ({ type: addNote, payload: note })
