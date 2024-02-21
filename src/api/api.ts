import axios from 'axios'

const SHAZAM_RAPID_API_KEY = import.meta.env.VITE_SHAZAM_RAPID_API_KEY

export const $axiosShazam = axios.create({
	baseURL: SHAZAM_RAPID_API_KEY,
	headers: {
		'X-RapidAPI-Key': 'd5192e61demshcb467a7e72408abp1b0cf0jsned15d31886ef',
		'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
	}
})

const SHAZAM_API_RAPID_API_KEY = import.meta.env.VITE_SHAZAM_API_RAPID_API_KEY

export const $axiosShazamApi = axios.create({
	baseURL: SHAZAM_API_RAPID_API_KEY,
	headers: {
		'X-RapidAPI-Key': 'd5192e61demshcb467a7e72408abp1b0cf0jsned15d31886ef',
		'X-RapidAPI-Host': 'shazam-api6.p.rapidapi.com'
	}
})
