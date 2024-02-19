import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Song } from 'types/type.data'

const initialState = {
	currentSongs: [],
	currentIndex: 0,
	isPlaying: false,
	activeSong: {},
	currentQueue: []
}

const playerSlice = createSlice({
	name: 'player',
	initialState,
	reducers: {
		activeSong(state, action: PayloadAction<Song>) {
			state.activeSong = action.payload
		},
		isPlaying(state, action) {
			state.isPlaying = action.payload
		},
		setCurrentSongs(state, action) {
			state.currentSongs = action.payload
			state.currentQueue = action.payload
		},
		setCurrentIndex(state, action) {
			state.currentIndex = action.payload
			state.activeSong = state.currentQueue[state.currentIndex]			
		},
		setCurrentQueue(state, action) {
			state.currentQueue = action.payload
		}
	}
})

export const {
	isPlaying,
	activeSong,
	setCurrentSongs,
	setCurrentIndex,
	setCurrentQueue
} = playerSlice.actions

export default playerSlice.reducer
