import { useActions, useAppSelector } from 'hooks/useActions'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Song } from 'types/type.data'

import PlayPause from './PlayPause'

interface Props {
	song: Song
	index: number
}

const SongCard: FC<Props> = ({ song, index }) => {
	const isPlaying = useAppSelector(state => state.player.isPlaying)

	const activeSong = useAppSelector(state => state.player.activeSong)

	const actions = useActions()

	const handlePauseClick = () => {
		actions.isPlaying(false)
	}
	const handlePlayClick = () => {
		actions.isPlaying(true)
		actions.activeSong(song)
		actions.setCurrentIndex(index)
	}

	return (
		<div className=' flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer select-none	'>
			{song.images ? (
				<div className='relative h-56 w-full mb-5 group'>
					<div
						className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}
					>
						<PlayPause
							handlePlay={handlePlayClick}
							handlePause={handlePauseClick}
							activeSong={activeSong}
							song={song}
							isPlaying={isPlaying}
						/>
					</div>
					<img
						src={song.images.coverart}
						className='w-full h-full rounded-lg'
					/>
				</div>
			) : (
				<p className='relative h-56 w-full mb-5 flex justify-center items-center text-2xl text-white'>
					Not image
				</p>
			)}

			<div className='text-white'>
				<p className='font-bold text-base mb-2 truncate'>
					<Link to={`/songs/${song?.key}`}>{song.title}</Link>
				</p>
				{song.artists ? (
					<p className='font-normal text-sm text-darkGrey truncate'>
						<Link to={`/artists/${song.artists[0].adamid}`}>
							{song.subtitle}
						</Link>
					</p>
				) : (
					<span>Not Found</span>
				)}
			</div>
		</div>
	)
}

export default SongCard
