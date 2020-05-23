import { AppState, TypedThunkAction, TypedThunkDispatch } from 'store/reducers';

const setNotes = 'NOTES/ADD_NOTE';

interface ListItem {
  title: string;
  text: string;
}

type List = ListItem[];

interface Actions {
  type: typeof setNotes;
  payload: List;
}

interface State {
  list: List;
}

const initialState: State = {
  list: [],
};

export default (state = initialState, action: Actions): State => {
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

/**
 * Upload new note
 * @param {string} title title of the note
 * @param {string} text text content
 */
export function onAddNote(
  title: string,
  text: string
): TypedThunkAction<Actions> {
  return (
    dispatch: TypedThunkDispatch<Actions>,
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
export function onGetNotes(): TypedThunkAction<Actions> {
  return (dispatch: TypedThunkDispatch<Actions>): void => {
    const list = localStorage.getItem('list');
    if (list) {
      const payload = JSON.parse(list) as List;
      dispatch({ type: setNotes, payload });
    }
  };
}
