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
  const textResponses = urls.map((url) =>
    fetch(url).then((response) => response.text())
  )
  Promise.all(textResponses)
    .then((htmlTexts) => {
      result = htmlTexts.map((htmlText) => extractMetaFromHTMLText(htmlText))
      res.send(result)
    })
    .catch((error) => res.status(400).send(error))
}

module.exports = { fetchMetaData }
