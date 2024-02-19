import InputRange from 'components/ui/InputRange'
import { useActions, useAppSelector } from 'hooks/useActions'
import React, { FC, useEffect, useState } from 'react'

import Controls from './Controls'
import Player from './Player'
import SeekBar from './SeekBar'
import Track from './Track'
import VolumeBar from './VolumeBar'

const MusicPlayer: FC = () => {
	const { isPlaying, activeSong, currentIndex, currentSongs } = useAppSelector(
		state => state.player
	)
	const actions = useActions()
	const [duration, setDuration] = useState<number>(0)
	const [seekTime, setSeekTime] = useState<number>(0)
	const [volume, setVolume] = useState<number>(0.5)
	const [repeat, setRepeat] = useState<boolean>(false)
	const [shuffle, setShuffle] = useState<boolean>(false)
	const [appTime, setAppTime] = useState<number>(0)

	useEffect(() => {
		if (shuffle) {
			const shuffledSongs = [...currentSongs].sort(() => Math.random() - 0.5)
			actions.setCurrentQueue(shuffledSongs)
		} else {
			actions.setCurrentQueue(currentSongs)
		}
	}, [shuffle])

	const handlePlayPause = () => {
		if (!activeSong.title) return

		if (isPlaying) {
			actions.isPlaying(false)
		} else {
			actions.isPlaying(true)
		}
	}
	const handlePrevSong = () => {
		if (currentIndex === 0) {
			actions.setCurrentIndex(currentSongs.length - 1)
		} else {
			actions.setCurrentIndex(currentIndex - 1)
		}
	}
	const handleNextSong = () => {
		if (currentIndex === currentSongs.length - 1) {
			actions.setCurrentIndex(0)
		} else {
			actions.setCurrentIndex(currentIndex + 1)
		}
	}

	return (
		<div className='relative flex-center-between px-8 w-full'>
			<Track activeSong={activeSong} isPlaying={isPlaying} />
			<div className='flex-1 flex flex-col justify-center w-full items-center px-5'>
				<Controls
					isPlaying={isPlaying}
					shuffle={shuffle}
					setShuffle={setShuffle}
					repeat={repeat}
					setRepeat={setRepeat}
					handlePlayPause={handlePlayPause}
					handlePrevSong={handlePrevSong}
					handleNextSong={handleNextSong}
				/>
				<SeekBar
					value={appTime}
					duration={duration}
					onInput={e => setSeekTime(e.target.value)}
				/>
				<Player
					volume={volume}
					isPlaying={isPlaying}
					activeSong={activeSong}
					seekTime={seekTime}
					repeat={repeat}
					onEnded={handleNextSong}
					onLoadedData={e => setDuration(e.target.duration)}
					onTimeUpdate={e => setAppTime(e.target.currentTime)}
				/>
			</div>
			<VolumeBar
				value={volume}
				onChange={e => setVolume(e.target.value)}
				setVolume={setVolume}
			/>
		</div>
	)
}

export default MusicPlayer
