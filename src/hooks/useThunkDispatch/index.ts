import { useDispatch } from 'react-redux';
import { TypedThunkDispatch, Actions } from 'store/reducers';

type Dispatch = TypedThunkDispatch<Actions>;

export const useThunkDispatch = (): Dispatch => useDispatch<Dispatch>();
