import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import Delete from '../components/Delete';

export default function List(props) {
    const [authors, setAuthors] = useState([])

    const {authors} = props;

    return (
        <div>
            {
                authors.map((author, index) => {
                    return (
                        <div key={index}>
                            <Link to={`/authors/${author._id}`} >{author.name}</ Link>
                            <br />
                            <Link to={`/authors/${author._id}/edit`}>Edit</Link>
                            <br />
                            <Delete />
                        </div>
                    )
                })
            }
        </div>
    )
}
