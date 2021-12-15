import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Form from '../components/Form';
import List from '../components/List';


export default function Main() {
    const [authors, setAuthors] = useState([]);
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
            <Form authors={authors} setAuthors={setAuthors} />
            <hr />
            {loaded && <List authors={authors}/> }
        </div>
    )
}
