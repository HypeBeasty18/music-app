import React, { FC, useEffect, useState } from 'react'

type Props = {
	value: number
	setValue: React.Dispatch<React.SetStateAction<number>>
	max: number
}

const InputRange: FC<Props> = ({ value, setValue, max }) => {
const [progressBar, setProgressBar] = useState<string>('0%')
  
	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault()

		const timilineWidth = e.currentTarget.clientWidth
		const clickPosition =
			e.clientX - e.currentTarget.getBoundingClientRect().left
		const valueToSeek = (clickPosition / timilineWidth) * max
		setValue(valueToSeek)
		console.log(timilineWidth, clickPosition, valueToSeek)
	}
	useEffect(() => {
    const currentWidth = value / max * 100
		setProgressBar(currentWidth.toString() + '%')
    console.log(progressBar);
    
	}, [value])

	return (
		<div className=' w-36 bg-white h-2 cursor-pointer rounded' onClick={handleClick}>
			<div className='h-2 bg-sky-600 rounded' style={{ width: progressBar }}></div>
		</div>
	)
}

export default InputRange
