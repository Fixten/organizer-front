import reducer, {
  setNotes,
  onAddNote,
  onGetNotes,
  initialState,
} from 'store/reducers/notes';
import { AppState } from 'store/reducers';

describe('redux notes', () => {
  const dispatch = jest.fn();
  const getState = jest.fn((): AppState => ({ notes: initialState }));
  const storageName = 'list';
  const data = { title: 'title', text: 'text' };
  const newList = [data];
  const stringList = JSON.stringify(newList);

  it('add note', () => {
    expect.assertions(3);

    const thunkAction = onAddNote(data);

    thunkAction(dispatch, getState, null);
    const { setItem } = localStorage;
    expect(setItem).toHaveBeenCalledWith(storageName, JSON.stringify(newList));
    expect(getState).toHaveBeenCalledWith();
    expect(dispatch).toHaveBeenCalledWith({
      payload: newList,
      type: setNotes,
    });
    localStorage.clear();
  });

  describe('get list', () => {
    const thunkAction = onGetNotes();
    it('get list from localstorage', () => {
      expect.assertions(1);
      thunkAction(dispatch, getState, null);
      const { getItem } = localStorage;
      expect(getItem).toHaveBeenCalledWith(storageName);
    });

    it('no dispatch if empty storage', () => {
      expect.assertions(1);
      thunkAction(dispatch, getState, null);
      expect(dispatch).toHaveBeenCalledTimes(0);
    });

    it('dispatch list', () => {
      expect.assertions(1);
      localStorage.setItem(storageName, stringList);
      thunkAction(dispatch, getState, null);
      expect(dispatch).toHaveBeenCalledWith({
        type: setNotes,
        payload: newList,
      });
    });
  });

  describe('reducer', () => {
    it('set notes', () => {
      expect.assertions(1);
      const newState = reducer(undefined, { type: setNotes, payload: newList });
      expect(newState).toStrictEqual({ list: newList });
    });
  });
});
