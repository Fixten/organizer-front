import { combineReducers, Action } from 'redux';
import notes, { NoteActions } from './notes';
import { ThunkAction, ThunkDispatch as dispatch } from 'redux-thunk';

export const rootReducer = combineReducers({ notes });

export type AppState = ReturnType<typeof rootReducer>;

export type TypedThunkAction<A extends Action> = ThunkAction<
  void,
  AppState,
  null,
  A
>;

export type TypedThunkDispatch<A extends Action> = dispatch<AppState, null, A>;

export type Actions = NoteActions;

export type ThunkDispatch = TypedThunkDispatch<Actions>;
