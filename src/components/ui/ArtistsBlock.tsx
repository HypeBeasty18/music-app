import { useAppSelector } from 'hooks/useActions'
import React, { FC } from 'react'
import { Artist } from 'types/type.data'

import ArtistCard from './ArtistCard'

type Props = {
	title: string
}

const ArtistsBlock: FC<Props> = ({ title }) => {
	const currentArtists = useAppSelector(state => state.player.currentArtists)

	return (
		<div className='flex flex-col '>
			<p className='text-white text-[28px] font-semibold mb-[20px]'>{title}:</p>
			<div className='flex flex-col gap-2'>
				{currentArtists.map((artist: Artist, index) => (
					<ArtistCard key={index} artist={artist} index={index} />
				))}
			</div>
		</div>
	)
}

export default ArtistsBlock
