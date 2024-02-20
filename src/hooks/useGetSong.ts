import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { GetSpotify } from 'services/GetSpotify.service'

export const useGetSong = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['top200'],
		queryFn: GetSpotify.GetSong
	})

	return useMemo(() => ({ data, isLoading, error }), [data, isLoading])
}
