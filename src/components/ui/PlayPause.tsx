import React, { FC } from 'react'
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'
import { Song } from 'types/type.data'

type Props = {
	handlePlay: () => void
	handlePause: () => void
	activeSong: Song | object
	song: Song
	isPlaying: boolean
}

const PlayPause: FC<Props> = ({
	handlePlay,
	handlePause,
	activeSong,
	song,
	isPlaying
}) => {

	return (
		<>
			{isPlaying && activeSong?.title === song.title ? (
				<FaPauseCircle
					size={35}
					className='text-gray-300'
					onClick={handlePause}
				/>
			) : (
				<FaPlayCircle
					size={35}
					className='text-gray-300'
					onClick={handlePlay}
				/>
			)}
		</>
	)
}

export default PlayPause
