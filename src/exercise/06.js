// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState(null)
  const inputRef = React.useRef()
  function handleSubmit(event) {
    event.preventDefault()
    const username = inputRef.current.value
    onSubmitUsername(username)
  }
  function handleChange(event) {
    const inputValue = event.target.value
    setUsername(inputValue.toLowerCase())
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          value={username}
          onChange={handleChange}
          type="text"
          id="username"
          ref={inputRef}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
