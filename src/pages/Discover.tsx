import Loader from 'components/loader/Loader'
import SongCard from 'components/ui/SongCard'
import { useAppSelector } from 'hooks/useActions'
import { useDiscover } from 'hooks/useDiscover'
import { FC, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { FindedSong, Song } from 'types/type.data'

const Discover: FC = () => {
	const currentSongs = useAppSelector(state => state.player.currentSongs)
	const { ref, inView } = useInView()
	const [value, setValue] = useState<number>(0)

	const { isPending, error, mutate } = useDiscover({
		value,
		setValue
	})
	useEffect(() => {
		mutate(value)
	}, [])

	useEffect(() => {
		if (inView && value < 200) {
			console.log('fire')
			mutate(value)
		}
	}, [inView])

	return (
		<>
			{value > 19 ? (
				<div>
					<p className='text-grey text-[24px] font-light mt-10 mb-5 animate-slideleft'>
						Top songs
					</p>
					<div className='flex flex-wrap  gap-8'>
						{currentSongs?.map((song: FindedSong | Song, index) =>
							currentSongs.length - 6 === index + 1 ? (
								<div key={index} ref={ref}>
									<SongCard
										song={song.track ? song.track : song}
										index={index}
									/>
								</div>
							) : (
								<SongCard
									key={index}
									song={song.track ? song.track : song}
									index={index}
								/>
							)
						)}
					</div>
					{isPending ? (
						<div className='flex justify-center items-center w-full'>
							<Loader />
						</div>
					) : null}
				</div>
			) : (
				<div className='flex justify-center items-center w-full'>
					<Loader />
				</div>
			)}
		</>
	)
}

export default Discover
