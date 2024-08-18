import { Fragment } from "react"
import { MetaDataPreview } from "./metadata-preview"

export const MetaDataList = ({ onClearMetaData, metaData }) => {
  return (
    <Fragment>
      <ul className="metadata-list-container">
        {metaData.map((data) => {
          return (
            <MetaDataPreview key={data.title} data={data}></MetaDataPreview>
          )
        })}
      </ul>
      <button
        className="mt-8 p-3 bg-blue-500 shadow-md shadow-blue-500/50 rounded-lg text-white"
        onClick={onClearMetaData}
      >
        Go again
      </button>
    </Fragment>
  )
}
