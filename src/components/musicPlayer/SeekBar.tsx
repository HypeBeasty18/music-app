import React, { FC } from 'react'

type Props = {
	value: number
	duration: number
	onInput: (e) => void
}

const SeekBar: FC<Props> = ({ value, duration, onInput }) => {
	const getTime = time =>
		`${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`

	return (
		<div className='flex flex-row items-center'>
			<p className='text-white'>{value === 0 ? '0:00' : getTime(value)}</p>
			<input
				type='range'
				step='any'
				value={value}
				min={0}
				max={duration}
				onInput={onInput}
        className='l h-2 mx-4 rounded-lg w-[250px] cursor-pointer'
			/>
			<p className='text-white'>
				{duration === 0 ? '0:00' : getTime(duration)}
			</p>
		</div>
	)
}

export default SeekBar
