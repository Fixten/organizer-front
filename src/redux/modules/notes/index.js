const setNotes = 'NOTES/ADD_NOTE'

const initialState = {
  list: []
}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case setNotes:
      return {
        list: payload
      }
    default:
      return state
  }
}

export function onAddNote(title, text) {
  return (dispatch, state) => {
    const { list } = state
    const newList = [...list, { title, text }]
    localStorage.setItem('list', JSON.stringify(newList))
    dispatch({
      type: setNotes,
      payload: newList
    })
  }
}

export function onGetNotes() {
  return async dispatch => {
    const list = localStorage.getItem('list')
    dispatch({ type: setNotes, payload: JSON.parse(list) })
  }
}
