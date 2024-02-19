import MusicPlayer from 'components/musicPlayer'
import { useAppSelector } from 'hooks/useActions'
import React, { FC } from 'react'

import NavLinks from './NavLinks'
import SearchInput from './SearchInput'

type Props = {
	children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
	const activeSong = useAppSelector(state => state.player.activeSong)

	return (
		<div className='flex relative hide-scrollbar overflow-hidden '>
			<div className='flex flex-col w-[240px] py-10  bg-black'>
				<a href='/'>
					<img
						src='/src/assets/icons/logo.png'
						alt='logo'
						className='w-full flex justify-center '
						draggable={false}
					/>
				</a>

				<NavLinks />
			</div>
			<div className='flex-1 flex-col bg-gradient-to-br from-black to-[#0078C0]'>
				<SearchInput />
				<div className='h-[calc(100vh-67px)] overflow-y-scroll hide-scrollbar px-5 pb-40 '>
					{children}
				</div>
			</div>
			{activeSong?.title ? (
				<div className='absolute bottom-0 left-0 right-0 flex h-28 animate-slideup bg-gradient-to-br from-white/10 to-blue backdrop-blur-lg rounded-t-3xl z-10 '>
					<MusicPlayer />
				</div>
			) : null}
		</div>
	)
}

export default Layout
