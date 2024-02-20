import React, { FC } from 'react'
import { Artist } from 'types/type.data'

type Props = {
	artist: Artist
	index: number
}

const ArtistCard: FC<Props> = ({ artist, number }) => {

	return (
		<div className='flex justify-start items-center animate-slideup w-[300px] gap-5 hover:bg-black/20 backdrop-blur-md cursor-pointer rounded-lg px-3 py-2'>
			<div className='w-[60px] h-[60px] '>
				<img src={artist.artist.avatar} className='rounded-full' />
			</div>
			<p className='font-semibold text-white text-base'>{artist.artist.name}</p>
		</div>
	)
}

export default ArtistCard
