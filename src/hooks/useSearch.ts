import { useMutation } from '@tanstack/react-query'
import { GetSpotify } from 'services/GetSpotify.service'

import { useActions } from './useActions'

export const useSearch = () => {
	const actions = useActions()

	const { mutate, isPending, error } = useMutation({
		mutationFn: (needToFind: string) => GetSpotify.GetSong(needToFind),
		onSuccess: data => {
			actions.setCurrentArtists(data.artists.hits)
			actions.setCurrentSongs(data.tracks.hits)
		},
		onError: error => {
			console.log(error)
		}
	})

	return { mutate, isPending, error }
}
