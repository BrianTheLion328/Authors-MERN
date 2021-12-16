import React,{useEffect, useState} from 'react'
import {navigate} from "@reach/router";
import axios from 'axios';

export default function Update(props) {

    const { id } = props;
    const [fullName, setFullName] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setFullName(res.data.name)
                console.log(res.data.name)
            })
            .catch(err => console.log(err.response) )

    }, [])

    const updateAuthor = (e) => {
        e.preventDefault()

        axios.put("http://localhost:8000/api/authors/" + id, {name: fullName})
            .then(res => console.log(res) )
            .catch(err => console.log(err.response) )
    }

    return (
        <div>
              <h1>Update an Author</h1>
            <form onSubmit={updateAuthor}>
                <p>
                    <label>First Name</label><br />
                    <input type="text"
                    name="fullName"
                    value={fullName}
                    onChange={(e) => { setFullName(e.target.value) }} />
                </p>
                <button className="submit-button" onClick={() => navigate(`/`) }>Submit</button>
            </form>
            <button onClick={() => navigate("/")}>Cancel</button>
        </div>
    )
}
