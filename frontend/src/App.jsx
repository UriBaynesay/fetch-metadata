import { useState } from "react"
import "./App.css"
import { UrlForm } from "./components/home/url-form"
import { fetchMetaDataService } from "./services/fetch-metadata.service"
import { MetaDataList } from "./components/home/metadata-list"

/**
 * The main application component that handles URL metadata fetching and display.
 *
 * This component maintains the state of fetched metadata using React's `useState` hook. It provides two main functionalities:
 * - **onSubmit**: Validates and processes a list of URLs. It checks if URLs are properly formatted, fetches metadata from valid URLs, and updates the state with the fetched metadata.
 * - **onClearMetaData**: Clears the currently stored metadata by resetting it to an empty array.
 *
 * The component conditionally renders either a list of metadata items or a form for submitting new URLs, based on whether metadata is available in the state.
 *
 * @component
 *
 */
function App() {
  const [metaData, setMetaData] = useState([])

  /**
   * Handles the submission of a list of URLs for metadata fetching.
   *
   * This function validates each URL in the provided array using a regular expression to ensure they are in a proper URL format.
   * If a URL is invalid, it displays an alert message. Valid URLs are then passed to a metadata fetching service. The fetched
   * metadata is used to update the application's state.
   *
   * @param {string[]} urls - An array of URL strings to be validated and processed.
   *
   * @returns {Promise<void>} A promise that resolves when the metadata fetching and state update are complete.
   */
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

  /**
   * Clears the current metadata by resetting it to an empty array.
   *
   * This function updates the application state to remove all currently stored metadata.
   * It is used to reset or clear
   * the metadata displayed in the UI.
   */
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
