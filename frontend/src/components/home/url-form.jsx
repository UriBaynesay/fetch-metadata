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
    <section>
      <form
        onSubmit={(ev) => {
          ev.preventDefault()
          onSubmit(urls)
        }}
      >
        {urls.map((url, index) => {
          return (
            <input
              type="text"
              name={index}
              key={index}
              onChange={handleChange}
              value={url}
            />
          )
        })}
        <button type="button" onClick={onAddURL}>
          Add Another URL
        </button>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}
