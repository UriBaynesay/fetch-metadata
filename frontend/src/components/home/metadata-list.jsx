import { MetaDataPreview } from "./metadata-preview"

export const MetaDataList = ({ onClearMetaData, metaData }) => {
  return (
    <ul className="metadata-list-container">
      {metaData.map((data) => {
        return <MetaDataPreview key={data.title} data={data}></MetaDataPreview>
      })}
      <button onClick={onClearMetaData}>Go again</button>
    </ul>
  )
}
