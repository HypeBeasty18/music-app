import InputRange from 'components/ui/InputRange'
import React, { FC } from 'react'
import {
	BsFillVolumeMuteFill,
	BsFillVolumeUpFill,
	BsVolumeDownFill
} from 'react-icons/bs'

type Props = {
	value: number
	onChange: (e) => void
	setVolume: React.Dispatch<React.SetStateAction<number>>
}

const VolumeBar: FC<Props> = ({ value, onChange, setVolume }) => {
	return (
		<div className='flex items-center justify-end'>
			{value <= 1 && value > 0.5 && (
				<BsFillVolumeUpFill
					size={25}
					color='#FFF'
					onClick={() => setVolume(0)}
					className='cursor-pointer'
				/>
			)}
			{value <= 0.5 && value > 0 && (
				<BsVolumeDownFill
					size={25}
					color='#FFF'
					onClick={() => setVolume(0)}
					className='cursor-pointer'
				/>
			)}
			{value == 0 && (
				<BsFillVolumeMuteFill
					size={25}
					color='#FFF'
					onClick={() => setVolume(1)}
					className='cursor-pointer'
				/>
			)}
			<input
				type='range'
				min='0'
				max='1'
				onChange={onChange}
				value={value}
				step='any'
				className='cursor-pointer'
			/>
		</div>
	)
}

export default VolumeBar
