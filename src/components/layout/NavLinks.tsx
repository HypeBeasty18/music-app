import React from 'react'
import {
	HiOutlineHashtag,
	HiOutlineHome,
	HiOutlinePhotograph,
	HiOutlineUserGroup
} from 'react-icons/hi'
import { NavLink } from 'react-router-dom'

const links = [
	{
		name: 'Discover',
		icon: HiOutlineHome,
		path: '/'
	},
	{
		name: 'Around you',
		icon: HiOutlinePhotograph,
		path: '/around-you'
	}
]

const NavLinks = (props: Props) => {
	return (
		<div className='flex flex-col gap-8 mt-20 left-0 px-10'>
			{links.map(link => (
				<NavLink key={link.name} to={link.path} className='flex items-center text-grey gap-2 transition-all duration-200 hover:text-blue'>
          <link.icon className='text-2xl'/>
          {link.name}
        </NavLink>
			))}
		</div>
	)
}

export default NavLinks
