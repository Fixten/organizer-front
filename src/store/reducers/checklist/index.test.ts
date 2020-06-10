import reducer, {
  addItem,
  onAddCheckBox,
  ChecklistActions,
  initialState,
} from './index';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { AppState, TypedThunkDispatch } from 'store/reducers';

const mockStore = configureMockStore<
  Pick<AppState, 'checklist'>,
  TypedThunkDispatch<ChecklistActions>
>([thunk]);

describe('checklist redux', () => {
  const newItem = 'new checkbox';
  describe('reducer', () => {
    it('add', () => {
      expect.assertions(1);
      const newState = reducer(undefined, {
        type: addItem,
        payload: newItem,
      });
      expect(newState).toStrictEqual({ list: [newItem] });
    });
  });
  it('on add', () => {
    expect.assertions(2);

    const store = mockStore({ checklist: initialState });
    store.dispatch(onAddCheckBox(newItem));
    const { setItem } = localStorage;
    expect(setItem).toHaveBeenCalledWith('checkbox', JSON.stringify([newItem]));
    expect(store.getActions()).toStrictEqual([
      {
        type: addItem,
        payload: newItem,
      },
    ]);
    localStorage.clear();
  });
});
