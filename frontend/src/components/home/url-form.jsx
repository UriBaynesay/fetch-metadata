import { useState } from "react"

export const UrlForm = ({ onSubmit }) => {
  const [urls, setUrls] = useState(["", "", ""])

  const handleChange = ({ target }) => {
    const newUrls = [...urls]
    newUrls[+target.name] = target.value
    setUrls(newUrls)
  }

  const onAddURL = () => {
    const newUrls = [...urls]
    newUrls.push("")
    setUrls(newUrls)
  }

  return (
    <section className="url-form-container container mx-auto">
      <form
        className="url-form flex flex-col items-center"
        onSubmit={(ev) => {
          ev.preventDefault()
          onSubmit(urls)
        }}
      >
        {urls.map((url, index) => {
          return (
            <input
              className="url-input border border-gray-100 rounded mt-8 p-2 "
              type="text"
              name={index}
              key={index}
              onChange={handleChange}
              value={url}
              placeholder="Enter your URL to fetch"
            />
          )
        })}
        <button
          className="mt-8 p-3 bg-blue-500 shadow-md shadow-blue-500/50 rounded-lg text-white"
          type="button"
          onClick={onAddURL}
        >
          Add Another URL
        </button>
        <button
          className="mt-8 p-3 bg-cyan-500 shadow-md shadow-cyan-500/50 rounded-lg text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  )
}
