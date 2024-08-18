export const MetaDataPreview = ({data}) =>{
    return (
      <li className="metadata-preview-container">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <img src={data.imageUrl} alt="" />
      </li>
    )
}