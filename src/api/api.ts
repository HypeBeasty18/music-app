import axios from 'axios'

const SHAZAM_CORE_API_URL = import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY

export const $axiosShazam = axios.create({
	baseURL: SHAZAM_CORE_API_URL,
	headers: {
		'X-RapidAPI-Key': 'd5192e61demshcb467a7e72408abp1b0cf0jsned15d31886ef',
		'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
	}
})
