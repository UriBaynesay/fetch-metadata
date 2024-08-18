import Axios from "axios"
const axios = Axios.create({
  withCredentials: true,
})

const BASEURL =
  process.env.NODE_ENV === "production"
    ? "/api/fetch-metadata"
    : "http://localhost:3030/api/fetch-metadata"

async function fetchMetaData(urls) {
  try {
    const { data } = await axios.post(BASEURL, urls)
    return data
  } catch (error) {
    throw error
  }
}

export const fetchMetaDataService = {
  fetchMetaData,
}
