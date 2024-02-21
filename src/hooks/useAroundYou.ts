import { useMutation, useQuery } from '@tanstack/react-query'
import { useEffect, useMemo } from 'react'
import { GetSpotify } from 'services/GetSpotify.service'

import { useActions } from './useActions'

export const useAroundYou = () => {
	const actions = useActions()

	const { data, error } = useQuery({
		queryKey: ['currentLocation'],
		queryFn: () => GetSpotify.CurrentLocation()
	})

	const { mutate, isPending } = useMutation({
		mutationKey: ['aroundYouSongs'],
		mutationFn: (country: string) => GetSpotify.GetAroundYouSongs(country),
		onSuccess(data) {
			console.log(data.result.tracks)
			actions.setCurrentSongs(data.result.tracks)
		},
		onError(error) {
			console.log(error)
		}
	})

	useEffect(() => {
		mutate(data)
	}, [data, mutate])

	return useMemo(
		() => ({ data, error, mutate, isPending }),
		[data, error, mutate, isPending]
	)
}
