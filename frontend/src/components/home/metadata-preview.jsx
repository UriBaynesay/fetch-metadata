export const MetaDataPreview = ({ data }) => {
  return (
    <li className="metadata-preview-container bg-slate-50 shadow-md shadow-slate-25 rounded-xl mt-4 p-2 w-fit">
      <article className="flex">
        <div className="text-info w-40">
          <h1 className="font-bold">Title : {data.title}</h1>
          <p>Description : {data.description}</p>
        </div>
        <img className="max-h-24" src={data.imageUrl} alt="" />
      </article>
    </li>
  )
}
