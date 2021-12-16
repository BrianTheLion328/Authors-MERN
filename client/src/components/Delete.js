import React from 'react'
import axios from 'axios';


const Delete = (props) => {

    const { authorId, successCallback } = props;

    const deletePerson = e => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res=>{ successCallback() })
    }
    return (
        <button className="delete-btn" onClick={deletePerson}>
            Delete
        </button>
    )
}
export default Delete;
