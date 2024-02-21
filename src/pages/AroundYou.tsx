import Loader from 'components/loader/Loader'
import SongCard from 'components/ui/SongCard'
import { useAppSelector } from 'hooks/useActions'
import { useAroundYou } from 'hooks/useAroundYou'
import { FC } from 'react'

const AroundYou: FC = () => {
	const { data, error, mutate, isPending } = useAroundYou()

	const currentSongs = useAppSelector(state => state.player.currentSongs)

	return (
		<div>
			<h2 className='title'>
				Around you {data ? <span className='text-grey'>[ {data} ]</span> : null}
			</h2>
			{error ? (
				<div>{error.message}</div>
			) : isPending ? (
				<div className='flex justify-center items-center w-full'>
					<Loader />
				</div>
			) : (
				<div className='flex flex-wrap  gap-8'>
					{currentSongs.map((song, index) => (
						<SongCard
							key={index}
							song={song.track ? song.track : song}
							index={index}
						/>
					))}
				</div>
			)}
		</div>
	)
}

export default AroundYou
