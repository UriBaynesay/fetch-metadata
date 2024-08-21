const { extractMetaFromHTMLText } = require("./fetch-metadata.service")

/**
 * Handles a POST request to fetch and extract metadata from a list of URLs.
 *
 * This function takes a list of URLs from the request body,
 * performs HTTP GET requests to fetch the HTML content from each URL,
 * extracts metadata from the HTML content, and sends the extracted metadata as the response.
 * In case of any error during the fetch or metadata extraction process, it sends a 400 status code with the error message.
 *
 * @param {Object} req - The HTTP request object. Expected to have `req.body` as an array of URLs.
 * @param {Object} res - The HTTP response object used to send the response.
 *
 * @returns {void}
 *
 */
function fetchMetaData(req, res) {
  const urls = req.body
  const metaDatas = urls.map(async (url) => {
    try {
      const fetchedUrl = await fetch(url)
      const data = await fetchedUrl.text()
      return extractMetaFromHTMLText({ html: data, url })
    } catch (error) {
      return res.status(400).send(error)
    }
  })
  Promise.all(metaDatas).then(result => res.send(result))
    .catch((error) => res.status(400).send(error))
}

module.exports = { fetchMetaData }
