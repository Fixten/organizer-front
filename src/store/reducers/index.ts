import { combineReducers } from 'redux';
import notes from './notes';

export const rootReducer = combineReducers({ notes });

export type AppState = ReturnType<typeof rootReducer>;
