const jsdom = require("jsdom")
const { JSDOM } = jsdom

function fetchMetaData(req, res) {
  const urls = req.body
  const responsesToTexts = urls.map(url=>fetch(url).then(response=>response.text()))
  Promise.all(responsesToTexts)
    .then((htmlTexts) => {
      result = htmlTexts.map((htmlText) => {
        const dom = new JSDOM(htmlText)
        const title = dom.window.document.title
        const description = dom.window.document
          .getElementsByTagName("meta")
          .namedItem("description")?.content
        const imageUrl = dom.window.document.images[0]?.src
        return { title, description, imageUrl }
      })
      res.send(result)
    })
    .catch((error) => res.status(404).send(error))
}

module.exports = { fetchMetaData }
