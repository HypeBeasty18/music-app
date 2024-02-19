import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import * as playerActions from 'store/playerSlice'
import { AppDispatch, RootState } from 'store/store'

const rootActions = {
	...playerActions
}

export const useActions = () => {
	const dispatch = useDispatch<AppDispatch>()

	return useMemo(() => {
		return bindActionCreators(rootActions, dispatch)
	}, [dispatch])
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
