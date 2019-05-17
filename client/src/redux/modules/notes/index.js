import { api } from '../../../api'

const addNote = 'NOTES/ADD_NOTE'
const getNotes = 'NOTES/GET_NOTES'

const initialState = {
  list: []
}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case addNote:
      return {
        ...state,
        list: [...state.list, payload]
      }
    case getNotes:
      return {
        ...state,
        list: payload
      }
    default:
      return state
  }
}

export const onAddNote = (title, text) => ({
  type: addNote,
  payload: { title, text }
})

export const onGetNotes = () => async dispatch => {
  const requestParams = {
    url: '/notes',
    method: 'GET'
  }
  const notes = await api(requestParams)
  dispatch({ type: getNotes, payload: notes })
}
