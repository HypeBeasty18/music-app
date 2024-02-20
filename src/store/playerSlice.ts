import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Song } from 'types/type.data'

const initialState = {
	currentSongs: [],
	currentArtists: [],
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
			state.currentIndex = 0
		},
		setCurrentIndex(state, action) {
			state.currentIndex = action.payload
			if (state.currentSongs[action.payload].track) {
				state.activeSong = state.currentQueue[state.currentIndex].track
			} else {
				state.activeSong = state.currentQueue[state.currentIndex]
			}
		},
		setCurrentQueue(state, action) {
			state.currentQueue = action.payload
		},
		setCurrentArtists(state, action) {
			state.currentArtists = action.payload
		}
	}
})

export const {
	isPlaying,
	activeSong,
	setCurrentSongs,
	setCurrentIndex,
	setCurrentQueue,
	setCurrentArtists
} = playerSlice.actions

export default playerSlice.reducer
