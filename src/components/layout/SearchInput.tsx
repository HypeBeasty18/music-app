import { useSearch } from 'hooks/useSearch'
import React from 'react'
import { FiSearch } from 'react-icons/fi'

type Props = {}

const SearchInput = (props: Props) => {
	// const {register, handleSubmit, onSubmit} = useSearch()

	return (
		<form className='pl-5 pt-5 pb-5'>
			<label htmlFor='search' className='sr-only'>
				Search all files
			</label>
			<div className='flex flex-row items-center'>
				<FiSearch aria-hidden='true' className='h-5 w-5 text-grey' />
				<input
					className='outline-none placeholder-grey ml-2 text-white bg-transparent text-xl'
					id='search'
					autoComplete='off'
					type='search'
					placeholder='Search'
				/>
			</div>
		</form>
	)
}

export default SearchInput
