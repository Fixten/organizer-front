import { combineReducers, Action } from 'redux';
import notes from './notes';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export const rootReducer = combineReducers({ notes });

export type AppState = ReturnType<typeof rootReducer>;

export type TypedThunkAction<A extends Action> = ThunkAction<
  void,
  AppState,
  null,
  A
>;

export type TypedThunkDispatch<A extends Action> = ThunkDispatch<
  AppState,
  null,
  A
>;
