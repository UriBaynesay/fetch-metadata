const {extractMetaFromHTMLText} = require("./fetch-metadata.service")

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
    .catch((error) => res.status(404).send(error))
}

module.exports = {fetchMetaData}