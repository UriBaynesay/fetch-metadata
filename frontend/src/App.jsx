import { useState } from "react"
import "./App.css"
import { UrlForm } from "./components/home/url-form"
import { fetchMetaDataService } from "./services/fetch-metadata.service"
import { MetaDataList } from "./components/home/metadata-list"

function App() {
  const [metaData, setMetaData] = useState([])

  const onSubmit = async (urls) => {
    const regex = new RegExp(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi
    )
    for (let i = 0; i < urls.length; i++) {
      if (urls[i] && !urls[i].match(regex))
        alert(`${urls[i]} - Not a valid URL, make sure to add https://`)
    }
    try {
      const newMetaData = await fetchMetaDataService.fetchMetaData(urls)
      setMetaData(newMetaData)
    } catch (error) {
      console.log(error)
    }
  }
  const onClearMetaData = () => {
    setMetaData([])
  }

  return (
    <div className="App px-8 h-dvh flex flex-col ">
      <header>
        <h1>Fetch Metadata - Tolstoy</h1>
      </header>
      <main className="grow mx-auto">
        {metaData.length ? (
          <MetaDataList
            onClearMetaData={onClearMetaData}
            metaData={metaData}
          ></MetaDataList>
        ) : (
          <UrlForm onSubmit={onSubmit}></UrlForm>
        )}
      </main>
      <footer>
        <small>Uri Baynesay</small>
      </footer>
    </div>
  )
}

export default App
