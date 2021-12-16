import React, { useEffect} from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import Delete from '../components/Delete';
import '../App.css';

export default function List(props) {
    const {authors, setAuthors} = props

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
        .then(res => setAuthors(res.data) )
        .catch(err => console.log(err.response) )
    }, [setAuthors])

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId) )
    }

    return (
        <div>
            {
                authors.map((author, index) => {
                    return (
                        <div className="list-box" key={index}>
                            <p className="list-name">{author.name}</ p>
                            <br />
                            <Link to={`/authors/${author._id}/edit`} className="edit-link">Edit</Link>
                            <br />
                            <Delete authorId={author._id} successCallback={() => removeFromDom(author._id)}/>
                        </div>
                    )
                })
            }
        </div>
    )
}
