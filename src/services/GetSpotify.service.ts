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
	}

	// async GetSong() {
	// 	try {
	// 		const res = await $axiosShazam.get('/tracks', {
	// 			params: { ids: '4WNcduiCmDNfmTEz7JvmLv' }
	// 		})
	//     const track = res.data.tracks[0];
	//     const trackUrl = track.external_urls.spotify;
	//     console.log(track);

	// 		return trackUrl
	// 	} catch (error) {
	// 		throw new Error()
	// 	}
	// }
}
