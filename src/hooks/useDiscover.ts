import { useQuery } from '@tanstack/react-query'
import { useEffect, useMemo } from 'react'
import { GetSpotify } from 'services/GetSpotify.service'

import { useActions } from './useActions'

export const useDiscover = (start: number) => {
	const actions = useActions()

	const { data, isLoading, error } = useQuery({
		queryKey: ['top20'],
		queryFn: () => GetSpotify.GetSongs(start)
	})
	useEffect(() => {
		if (data?.tracks) {
			actions.setCurrentSongs(data.tracks)
		}
	}, [isLoading])

	return useMemo(() => ({ isLoading, error }), [isLoading, error])
}
