import React from 'react'
import useInput from '../../customhook/useInput'

const Form = () => {
    const [title, resetTitle, bindTitle] = useInput();
    const [content, resetContent, bindContent] = useInput();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ title, content });
        resetTitle();
        resetContent();
    };
    return (
        <div className="section">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">New Note</h5>
                <div className="input-field">
                    <input type="text" className="validate" id="note_title" {...bindTitle} />
                    <label className="active" htmlFor="note_title">Note Title</label>
                </div>
                <div className="input-field">
                    <textarea id="note_content" className="materialize-textarea" {...bindContent}></textarea>
                    <label htmlFor="note_content">Note content</label>
                </div>
                <button className="btn green">Add Note</button>
            </form >
        </div >
    )
}

export default Form
