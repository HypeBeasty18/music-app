import Loader from 'components/loader/Loader'
import SongCard from 'components/ui/SongCard'
import { useAppSelector } from 'hooks/useActions'
import { useDiscover } from 'hooks/useDiscover'
import { FC, useEffect } from 'react'
import { Song } from 'types/type.data'

const Discover: FC = () => {
	const currentSongs = useAppSelector(state => state.player.currentSongs)

	const { isLoading, error } = useDiscover(0)

	return (
		<>
			{isLoading ? (
				<div className='flex justify-center items-center w-full'>
					<Loader />
				</div>
			) : (
				<div className=' '>
					<p className='text-white text-[40px] font-medium animate-slideup'>
						Discover
					</p>
					{!isLoading ? (
						<div className='flex flex-wrap mt-10 gap-8'>
							{currentSongs.map((song: Song, index) => (
								<SongCard key={song.key} song={song} index={index} />
							))}
						</div>
					) : (
						<span>{error}</span>
					)}
				</div>
			)}
		</>
	)
}

export default Discover
