import React, {useState, useEffect} from 'react';
import axios from 'axios';
import List from '../components/List';
import { Link } from '@reach/router';


export default function Main(props) {
    const {authors, setAuthors} = props;
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                setAuthors(res.data);
                setLoaded(true);
            })
    }, []);

    return (
        <div>
            <Link to="/new">Add a new Author</Link>
            <hr />
            {loaded && <List authors={authors} setAuthors={setAuthors} /> }
        </div>
    )
}
