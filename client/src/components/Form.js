import React, { useState } from 'react';
import axios from 'axios';
import {Link, navigate} from "@reach/router";
import '../App.css'

export default function Form(props) {

    const [authors, setAuthors] = useState([]);
    const [fullName, setFullName] = useState('');
    // const [errors, setErrors] = useState([])

    const createAuthor = (e) => {
        e.preventDefault()

        axios.post("http://localhost:8000/api/authors", {name: fullName})
            .then(res => {
                setAuthors([...authors, res.data]);
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
                // if (err.response.data.errors) {
                //     setErrors(err.response.data.errors)
                // }
            })
    }


    return (
        <div>
            <p>
            <Link to="/">Home</Link>
            </p>
            <form onSubmit={createAuthor}>
                <div>
                    {/* {
                        errors.fullName &&
                        <span style={{color: "red"}}>{errors.fullName.message}</span>
                    } */}
                    <label>Full Name:</label>
                    <input type="text" name="fullName" value={fullName} onChange={ (e) => setFullName(e.target.value) } />
                </div>
                <br />
                <div>
                    <button className="submit-button">Submit</button>
                </div>
            </form>
            <br />
            <button className="cancel-button" onClick={() => navigate('/') }>Cancel</button>
        </div>
    )
}
