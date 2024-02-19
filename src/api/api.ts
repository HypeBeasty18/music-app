import axios from "axios"


const SHAZAM_CORE_API_URL =  import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY

export const $axiosShazam = axios.create({
  baseURL: SHAZAM_CORE_API_URL,
  headers: {
    'X-RapidAPI-Key': '7445b69481msh94fb4b6d527963dp12062cjsn8ac318a01544',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
  }
})