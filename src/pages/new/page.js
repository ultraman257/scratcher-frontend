import { useState, React } from 'react'

const NewTask = () => {
  const [URL, setURL] = useState('https://')
  const [URLCapture, setURLCapture] = useState('')
  const [searchDepth, setSearchDepth] = useState('')

  function handleURLChange (e) {
    setURL(e.target.value)
  }

  function handleFocusChange (e) {
    if (e.type === 'focus') {
      setURLCapture(URL)
      return
    }

    if (e.type === 'blur') {
      // Check URL for errors.
      // TODO: Make better

      if (URL.lastIndexOf('.') === -1) {
        setURL(URLCapture)
      }
    }
  }

  function handleSearchDepth (e) {
    setSearchDepth(e.target.value)
  }

  return (
    <div className='page-content'>
      <h4>New Task</h4>
      <p>
        Please enter the URL and search depth, if a search depth is not
        specified the default of 1 will be used.
      </p>
      <label>
        URL
        <input
          type='text'
          value={URL}
          onChange={handleURLChange}
          onFocus={handleFocusChange}
          onBlur={handleFocusChange}
        />
      </label>
      <label>
        Search Depth
        <input type='number' value={searchDepth} onChange={handleSearchDepth} />
      </label>
    </div>
  )
}

export default NewTask
