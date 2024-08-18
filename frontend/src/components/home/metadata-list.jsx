import { Fragment } from "react"
import { MetaDataPreview } from "./metadata-preview"

/**
 * A component that displays a list of metadata items and a button to clear the metadata.
 *
 * This component renders a list of metadata previews, where each item is represented by the `MetaDataPreview` component.
 * It also includes a button to trigger the `onClearMetaData` function, which clears the current metadata.
 *
 * @param {Object} props - The props object.
 * @param {Function} props.onClearMetaData - A callback function to clear the current metadata. This function is called
 * when the "Go again" button is clicked.
 * @param {Object[]} props.metaData - An array of metadata objects to be displayed. Each object should have a `title` property
 * and other relevant metadata fields.
 * @param {string} props.metaData.title - The title of the metadata item, used as a key for rendering each `MetaDataPreview`.
 *
 * @returns {JSX.Element} The rendered component, including a list of metadata previews and a button to clear the metadata.
 */
export const MetaDataList = ({ onClearMetaData, metaData }) => {
  return (
    <Fragment>
      <ul className="metadata-list-container ">
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
