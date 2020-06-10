import { combineReducers, Action } from 'redux';
import { ThunkAction, ThunkDispatch as dispatch } from 'redux-thunk';
import notes, { NoteActions } from './notes';
import checklist from './checklist';

export const rootReducer = combineReducers({ notes, checklist });

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
