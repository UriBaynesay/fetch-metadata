import { useState } from "react"
import "./App.css"
import { UrlForm } from "./components/home/url-form"
import { fetchMetaDataService } from "./services/fetch-metadata.service"

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
  return (
    <div className="App">
      <UrlForm onSubmit={onSubmit}></UrlForm>
    </div>
  )
}

export default App
