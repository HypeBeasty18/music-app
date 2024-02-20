import { useMutation } from '@tanstack/react-query'
import { GetSpotify } from 'services/GetSpotify.service'

import { useActions, useAppSelector } from './useActions'

interface Props {
	value: number
	setValue: React.Dispatch<React.SetStateAction<number>>
}

export const useDiscover = ({ value, setValue }: Props) => {
	const actions = useActions()

	const currentSongs = useAppSelector(state => state.player.currentSongs)

	const { mutate, isPending, error } = useMutation({
		mutationKey: [`getSongs`],
		mutationFn: (value: number) => GetSpotify.GetSongs(value),
		onSuccess(data) {
			if (value === 0) {
				actions.setCurrentSongs(data.tracks)
				setValue(value + 20)
			} else {
				actions.setCurrentSongs(currentSongs.concat(data.tracks))
				setValue(value + 20)
			}
		}
	})

	return { isPending, error, mutate }
}

// 479756766

// 2715720

// 271256
// 1031397873
// 183313439
