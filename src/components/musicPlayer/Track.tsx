import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { Song } from 'types/type.data'

type Props = {
	activeSong: Song
	isPlaying: boolean
}

const Track: FC<Props> = ({ activeSong, isPlaying }) => {

	return (
		<div className='flex items-center justify-start '>
			<div
				className={`${isPlaying && activeSong.title ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}
			>
				<img src={activeSong.images.coverart} className='rounded-full' />
			</div>
			<div>
				<p className='font-bold text-base mb-2 truncate text-white w-[200px]'>
					<Link to={`/songs/${activeSong?.key}`}>{activeSong.title}</Link>
				</p>
				<p className='font-normal text-sm text-darkGrey truncate w-[200px'>
					<Link to={`/artists/${activeSong.artists[0].adamid}`}>
						{activeSong.subtitle}
					</Link>
				</p>
			</div>
		</div>
	)
}

export default Track
