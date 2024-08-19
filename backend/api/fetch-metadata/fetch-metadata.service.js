const jsdom = require("jsdom")
const { JSDOM } = jsdom

/**
 * Extracts metadata from an HTML text string.
 *
 * This function parses the provided HTML content and extracts key pieces of metadata, including the page title,
 * a description from the `<meta>` tag, and the URL of the first image on the page. It uses the `jsdom` library to
 * create a DOM representation of the HTML text for easy querying.
 *
 * @param {string} htmlText - The HTML content as a string from which metadata will be extracted.
 *
 * @returns {Object} An object containing the extracted metadata:
 * - `title` (string): The content of the `<title>` tag of the page.
 * - `description` (string|undefined): The content of the `<meta name="description">` tag, or `undefined` if not present.
 * - `imageUrl` (string|undefined): The `src` attribute of the first `<img>` tag, or `undefined` if no images are found.
 *
 */
function extractMetaFromHTMLText(htmlAndURL) {
  const dom = new JSDOM(htmlAndURL.html)
  const title = dom.window.document.title
  const description = dom.window.document
    .getElementsByTagName("meta")
    .namedItem("description")?.content
  let imageUrl = dom.window.document.images[0]?.src
    ? dom.window.document.images[0]?.src
    : "https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=P1DebpeMIAtXj_ZbVsKVvg-duuL0v9DlrOZUvPG6UJk="

  if (imageUrl?.startsWith("/")) {
    imageUrl = htmlAndURL.url + "" + imageUrl
  }
  return { title, description, imageUrl }
}

module.exports = { extractMetaFromHTMLText }
