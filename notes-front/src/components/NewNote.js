import React, { useState } from 'react'

const NewNote = ({ createNote }) => {
  const [userName, setUserName] = useState('')
  const [text, setText] = useState('')

  const handleUserNameChanges = (event) => {
    setUserName(event.target.value)
  }

  const handleTextChanges = (event) => {
    setText(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()
    createNote(userName, text)
  }

  return (
    <div className="formDiv">
      <h3>Add a new</h3>

      <form>
        <div>
          <input name='userName' onChange={handleUserNameChanges} placeholder='User Name' />
        </div>
        <div>
          <input name='text' onChange={handleTextChanges} placeholder='Text' />
        </div>
        <div>
          <button id="btnSaveNote" type="submit" onClick={addNote}>add</button>
        </div>
      </form>
    </div>
  )
}

export default NewNote