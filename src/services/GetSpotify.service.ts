import { $axiosShazam } from 'api/api'

export const GetSpotify = {
	async GetSongs(start: number) {
		try {
			const res = await $axiosShazam.get('/charts/track', {
				params: { locale: 'en-US', startFrom: `${start}` }
			})

			return res.data
		} catch (error) {
			throw new Error()
		}
	},

	async GetSong(data: string) {
		try {
			const res = await $axiosShazam.get('/search', {
				params: {
					term: data,
					locale: 'en-US',
					offset: '0',
					limit: '5'
				}
			})
			return res.data
		} catch (error) {
			throw new Error()
		}
	}
}
