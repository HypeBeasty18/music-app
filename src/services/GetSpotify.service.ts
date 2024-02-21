import { $axiosShazam, $axiosShazamApi } from 'api/api'
import axios from 'axios'

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
	},
	async CurrentLocation() {
		try {
			const res = await axios.get(
				`https://geo.ipify.org/api/v2/country?apiKey=${import.meta.env.VITE_GEOLOCATION_API_KEY}`
			)
				console.log(res.data.location.country);
				
			return res.data.location.country
		} catch (error) {
			throw new Error()
		}
	},
	async GetAroundYouSongs(country: string) {
		try {
			const res = await $axiosShazamApi.get('/top_tracks_country', {
				params: {
					country_code: country,
					limit: '40'
				}
			})
			return res.data
		} catch (error) {
			throw new Error()
		}
	}
}
