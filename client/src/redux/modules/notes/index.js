const addNote = 'NOTES/ADD_NOTE'

const initialState = {
  list: [
    { title: 'first', text: 'lil text' },
    { title: 'fourth', text: 'screw u' }
  ]
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

export const onAddNote = (title, text) => ({
  type: addNote,
  payload: { title, text }
})
