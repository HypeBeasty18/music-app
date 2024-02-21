import Loader from 'components/loader/Loader'
import ArtistsBlock from 'components/ui/ArtistsBlock'
import SongCard from 'components/ui/SongCard'
import { useAppSelector } from 'hooks/useActions'
import { useSearch } from 'hooks/useSearch'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FindedSong, Song } from 'types/type.data'

type Props = {}

const Search = (props: Props) => {
	const location = useLocation()
	const pathSegments = location.pathname.split('/')
	const needToFind = pathSegments[2]
	const currentSongs = useAppSelector(state => state.player.currentSongs)
	const { mutate, isPending, error } = useSearch()

	useEffect(() => {
		if (needToFind) {
			mutate(needToFind)
		}
	}, [mutate, needToFind])

	return (
		<>
			{isPending ? (
				<div className='flex justify-center items-center w-full'>
					<Loader />
				</div>
			) : (
				<div>
					{error ? (
						<span>{error.message}</span>
					) : (
						<div>
							<p className='text-white text-[40px] font-medium animate-slideup'>
								Found by request{' '}
								<span className='text-grey'>
									[ {decodeURIComponent(needToFind)} ]
								</span>
							</p>
							<div className='flex justify-between'>
								<div className='flex flex-wrap mt-10 gap-8 mr-[30px]'>
									{currentSongs.map((song: FindedSong | Song, index) => (
										<SongCard
											key={index}
											song={song.track ? song.track : song}
											index={index}
										/>
									))}
								</div>
								<ArtistsBlock title={'Found artists'} />
							</div>
						</div>
					)}
				</div>
			)}
		</>
	)
}

export default Search
