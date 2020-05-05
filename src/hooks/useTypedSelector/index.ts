import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { AppState } from 'store/reducers'

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector
