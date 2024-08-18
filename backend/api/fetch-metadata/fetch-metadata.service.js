const jsdom = require("jsdom")
const { JSDOM } = jsdom

function extractMetaFromHTMLText(htmlText) {
  const dom = new JSDOM(htmlText)
  const title = dom.window.document.title
  const description = dom.window.document
    .getElementsByTagName("meta")
    .namedItem("description")?.content
  const imageUrl = dom.window.document.images[0]?.src
  return { title, description, imageUrl }
}

module.exports = { extractMetaFromHTMLText }
