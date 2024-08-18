import { useState } from "react"
import "./App.css"
import { UrlForm } from "./components/home/url-form"
import { fetchMetaDataService } from "./services/fetch-metadata.service"
import { MetaDataList } from "./components/home/metadata-list"

function App() {
  const [metaData, setMetaData] = useState([])

  const onSubmit = async (urls) => {
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
    <div className="App">
      {metaData.length ? (
        <MetaDataList onClearMetaData={onClearMetaData} metaData={metaData}></MetaDataList>
      ) : (
        <UrlForm onSubmit={onSubmit}></UrlForm>
      )}
    </div>
  )
}

export default App
