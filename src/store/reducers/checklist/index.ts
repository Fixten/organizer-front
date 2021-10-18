import { TypedThunkAction } from 'store/reducers';

export const addItem = 'ADD_ITEM';

interface AddAction {
  type: typeof addItem;
  payload: string;
}
export type ChecklistActions = AddAction;

interface State {
  list: string[];
}

export const initialState: State = { list: [] };

export default function (
  state = initialState,
  action: ChecklistActions
): State {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        list: [...state.list, action.payload],
      };
    default:
      return state;
  }
}

export function onAddCheckBox(newItem: string): TypedThunkAction<AddAction> {
  return (dispatch, getState) => {
    const state = getState();
    const newState: string[] = [...state.checklist.list, newItem];
    localStorage.setItem('checkbox', JSON.stringify(newState));
    dispatch({
      type: addItem,
      payload: newItem,
    });
  };
}
