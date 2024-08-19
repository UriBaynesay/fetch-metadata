import Axios from "axios"
const axios = Axios.create({
  withCredentials: true,
})

const BASEURL =
  process.env.NODE_ENV === "production"
    ? "/api/fetch-metadata"
    : "http://localhost:3030/api/fetch-metadata"

/**
 * Fetches metadata for a list of URLs.
 *
 * This function sends a POST request to the `BASEURL` endpoint with an array of URLs.
 * The function returns the metadata if the request is successful. If an error occurs during
 * the request, it is thrown to be handled by the caller.
 *
 * @param {string[]} urls - An array of URLs for which metadata is to be fetched.
 *
 * @returns {Promise<Object[]>} A promise that resolves to an array of metadata objects. Each metadata object contains
 * information about a URL, as defined by the server's response schema.
 *
 * @throws {Error} Throws an error if the request fails or if there is an issue with fetching metadata.
 */
async function fetchMetaData(urls) {
  const cleanedURLS = urls.filter((url) => url)
  try {
    const { data } = await axios.post(BASEURL, cleanedURLS)
    return data
  } catch (error) {
    throw error
  }
}

export const fetchMetaDataService = {
  fetchMetaData,
}
