/**
 * A component that displays a preview of a single metadata item.
 *
 * This component renders a metadata preview including the title, description, and an image. The information is displayed
 * within a styled list item element. The `data` prop contains the metadata to be displayed.
 *
 * @param {Object} props - The props object.
 * @param {Object} props.data - The metadata object to be displayed.
 * @param {string} props.data.title - The title of the metadata item.
 * @param {string} props.data.description - The description of the metadata item.
 * @param {string} [props.data.imageUrl] - The URL of the image associated with the metadata item.
 *
 * @returns {JSX.Element} The rendered component, including a styled preview of the metadata item.
 */
export const MetaDataPreview = ({ data }) => {
  return (
    <li className="metadata-preview-container bg-slate-50 shadow-md shadow-slate-25 rounded-xl mt-4 p-2 w-fit">
      <article className="flex gap-6">
        <div className="text-info text-center w-40">
          <h1 className="font-bold">{data.title}</h1>
          <p>{data.description}</p>
        </div>
        <img className="max-h-24" src={data.imageUrl} alt="" />
      </article>
    </li>
  )
}
