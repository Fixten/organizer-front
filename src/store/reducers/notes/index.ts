import { AppState, TypedThunkAction, TypedThunkDispatch } from 'store/reducers';

export const setNotes = 'NOTES/ADD_NOTE';

interface ListItem {
  title: string;
  text: string;
}

type List = ListItem[];

export interface NoteActions {
  type: typeof setNotes;
  payload: List;
}

interface State {
  list: List;
}

export const initialState: State = {
  list: [],
};

export default (state = initialState, action: NoteActions): State => {
  const { type, payload } = action;
  switch (type) {
    case setNotes:
      return {
        list: payload,
      };
    default:
      return state;
  }
};

export interface OnAddNoteData {
  title: string;
  text: string;
}

/**
 * Upload new note
 * @param {OnAddNoteData} data
 */
export function onAddNote(data: OnAddNoteData): TypedThunkAction<NoteActions> {
  const { title, text } = data;
  return (
    dispatch: TypedThunkDispatch<NoteActions>,
    getState: () => AppState
  ): void => {
    const { list } = getState().notes;
    const newList = [...list, { title, text }];
    localStorage.setItem('list', JSON.stringify(newList));
    dispatch({
      type: setNotes,
      payload: newList,
    });
  };
}

/**
 * Loads notes in store
 */
export function onGetNotes(): TypedThunkAction<NoteActions> {
  return (dispatch: TypedThunkDispatch<NoteActions>): void => {
    const list = localStorage.getItem('list');
    if (list) {
      const payload = JSON.parse(list) as List;
      dispatch({ type: setNotes, payload });
    }
  };
}
