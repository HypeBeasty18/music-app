import { FC, useEffect, useRef } from 'react'
import { Song } from 'types/type.data'

type Props = {
	activeSong: Song
	isPlaying: boolean
	repeat: boolean
	seekTime: number
	volume: number
	onEnded: () => void
	onTimeUpdate: (e) => void
	onLoadedData: (e) => void
}

const Player: FC<Props> = ({
	activeSong,
	isPlaying,
	repeat,
	seekTime,
	onEnded,
	onTimeUpdate,
	onLoadedData,
	volume
}) => {
	const audioRef = useRef<HTMLAudioElement>(null)

	useEffect(() => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.play()
			} else {
				audioRef.current.pause()
			}
		}
	}, [isPlaying, activeSong])

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.volume = volume
		}
	}, [volume])

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.currentTime = seekTime
		}
	}, [seekTime])

	
	return (
		<audio
			ref={audioRef}
			src={activeSong.hub.actions && activeSong.hub.actions[1].uri}
			loop={repeat}
			onEnded={onEnded}
			onTimeUpdate={onTimeUpdate}
			onLoadedData={onLoadedData}
		/>
	)
}

export default Player
