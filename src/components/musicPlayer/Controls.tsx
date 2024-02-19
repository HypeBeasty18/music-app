import React, { FC } from 'react'
import {
	BsArrowRepeat,
	BsFillPauseFill,
	BsFillPlayFill,
	BsShuffle
} from 'react-icons/bs'
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md'

type Props = {
	isPlaying: boolean
	shuffle: boolean
	setShuffle: React.Dispatch<React.SetStateAction<boolean>>
	repeat: boolean
	setRepeat: React.Dispatch<React.SetStateAction<boolean>>
	handlePlayPause: () => void
	handlePrevSong: () => void
	handleNextSong: () => void
}

const Controls: FC<Props> = ({
	isPlaying,
	shuffle,
	setShuffle,
	repeat,
	setRepeat,
	handlePlayPause,
	handlePrevSong,
	handleNextSong
}) => {
	return (
		<div className='flex items-center justify-around md:w-36 lg:w-52 2xl:w-80 '>
			<BsArrowRepeat
				size={20}
				className='cursor-pointer'
				onClick={() => setRepeat(!repeat)}
				color={repeat ? '#B80C09' : 'black'}
			/>
			<MdSkipPrevious
				size={30}
				className='cursor-pointer'
				onClick={handlePrevSong}
			/>
			{isPlaying ? (
				<BsFillPauseFill
					size={45}
					onClick={handlePlayPause}
					className='cursor-pointer'
				/>
			) : (
				<BsFillPlayFill
					size={45}
					onClick={handlePlayPause}
					className='cursor-pointer'
				/>
			)}
			<MdSkipNext
				size={30}
				className='cursor-pointer'
				onClick={handleNextSong}
			/>
			<BsShuffle
				size={20}
				className='cursor-pointer'
				onClick={() => setShuffle(!shuffle)}
				color={shuffle ? '#B80C09' : 'black'}
			/>
		</div>
	)
}

export default Controls
