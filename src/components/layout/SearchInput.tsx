import { useSearch } from 'hooks/useSearch'
import { FC, useEffect, useRef, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const SearchInput: FC = () => {
	const navigate = useNavigate()

	const valueRef = useRef<string>('')
	const timeoutRef = useRef<number | null>(null)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const inputValue = (
			e.currentTarget.elements.namedItem('search') as HTMLInputElement
		).value
		navigate(`/search/${inputValue}`)
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current)
		}
		if (e.target.value !== '') {
			timeoutRef.current = setTimeout(() => {
				valueRef.current = e.target.value
				navigate(`/search/${valueRef.current}`)
			}, 1000)
		}
	}

	return (
		<form className='pl-5 pt-5 pb-5' onSubmit={handleSubmit}>
			<label htmlFor='search' className='sr-only'>
				Search all files
			</label>
			<div className='flex flex-row items-center'>
				<FiSearch aria-hidden='true' className='h-5 w-5 text-grey' />
				<input
					className='outline-none placeholder-grey ml-2 text-white bg-transparent text-xl w-full'
					id='search'
					autoComplete='off'
					type='search'
					placeholder='Search'
					onChange={handleChange}
				/>
			</div>
		</form>
	)
}

export default SearchInput
