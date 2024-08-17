const jsdom = require("jsdom")
const { JSDOM } = jsdom

function fetchMetaData(req, res) {
  const urls = req.body
  const fetchedUrls = getUrlFetchPromises(urls)
  Promise.all(fetchedUrls).then((values) => {
    const result = []
    values.forEach((value, index) =>
      value.text().then((htmlText) => {
        const dom = new JSDOM(htmlText)
        const title = dom.window.document.title
        const description = dom.window.document
          .getElementsByTagName("meta")
          .namedItem("description")?.content
        const imageUrl = dom.window.document.images[0]?.src
        result.push({ title, description, imageUrl })
        if (index === values.length - 1) res.send(result)
      })
    )
  }).catch(error=>res.status(404).send(error))
}

function getUrlFetchPromises(urls) {
  const fetchedUrls = []
  for (const key in urls) {
    fetchedUrls.push(fetch(urls[key]))
  }
  return fetchedUrls
}

module.exports = fetchMetaData
