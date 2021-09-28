import React from 'react'
import Note from './Note'

const NotesList = ({ notes }) => {
    console.log('notes', notes);
    return (
        <div className="noteslist">
            {notes && notes.map(note => <Note note={note} key={note.id} />)}
        </div>
    )
}

export default NotesList
