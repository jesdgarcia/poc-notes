import { useState, useEffect } from 'react'
import notesService from './services/notes'
import NewNote from './components/NewNote'
import Notes from './components/Notes'

const App = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    notesService.getAll().then(response => setNotes(response._embedded.notes))
  }, [])

  const createNote = (userName, text) => {
    if (userName === '' || text === '') {
      window.alert(`Please write all parameters`)
    } else {
      const newNote = {
        userName: userName,
        text: text,
      }
      notesService
        .create(newNote)
        .then(response => {
          setNotes([...notes, response])
        })
    }
  }

  const handleDelete = (id) => {
    const note = notes.find(n => n.id === id)
    if (window.confirm(`Delete ${note.text}?`)) {
      notesService
        .remove(note.id)
        .then(() => {
          setNotes([...notes.filter(n => n.id !== id)])
        })
    }
  }

  return (
    <div className="App">
      <h1>Poc - Notes</h1>
      <Notes notes={notes} handleDelete={handleDelete} />
      <NewNote createNote={createNote} />
    </div>
  );
}

export default App;