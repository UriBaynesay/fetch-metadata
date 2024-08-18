const jsdom = require("jsdom")
const { JSDOM } = jsdom

function fetchMetaData(req, res) {
  const urls = req.body
  const fetchedUrls = getUrlFetchPromises(urls)
  Promise.all(fetchedUrls)
    .then((values) => {
      const htmlTexts = []
      values.forEach((value) => {
        htmlTexts.push(value.text())
      })
      Promise.all(htmlTexts).then((htmlTexts) => {
        result=htmlTexts.map(htmlText=>{
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
    })
    .catch((error) => res.status(404).send(error))
}

function getUrlFetchPromises(urls) {
  const fetchedUrls = []
  urls.forEach((url) => {
    if (url) fetchedUrls.push(fetch(url))
  })
  return fetchedUrls
}

module.exports = { fetchMetaData }
