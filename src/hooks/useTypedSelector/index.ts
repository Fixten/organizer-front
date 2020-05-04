import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { AppState } from '../../redux/reducers'

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector
