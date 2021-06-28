import { useState } from 'react'
import Filter from './Filter'

const Notes = ({ notes, handleDelete }) => {
    const [filterUserName, setFilterUserName] = useState('')

    const handleFilterUserName = (event) => {
        setFilterUserName(event.target.value)
      }

    return (
        <div>
            <h3>Notes:</h3>
            <Filter handleFilter={handleFilterUserName} />
            <ul>
                {notes.filter(note => note.userName.includes(filterUserName) ).map(note =>
                    <li key={note.id}>{note.text} - {note.userName} <button onClick={() => handleDelete(note.id)}>delete</button></li>
                )}
            </ul>
        </div>
    )
}

export default Notes