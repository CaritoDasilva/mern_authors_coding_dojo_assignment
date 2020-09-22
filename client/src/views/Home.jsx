import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const Home = () => {
    const [authors, setAuthors] = useState([])
    useEffect(() => {
        getAuthors()
    }, [])

    const getAuthors = () => {
        axios.get('http://localhost:8000/api/authors/')
            .then(res => setAuthors(res.data.authors))
            .catch(err => err.res.data.errors)
    }
    return (
        <div className="container">
            <h1>Favorite Authors</h1>
            <Link to="/new">
                <p>Add an author</p>
            </Link>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {authors && authors.map((auth, i) => {
                        return (
                            <tr key={i}>
                                <th scope="row">{auth.name}</th>
                                <td>
                                    <Link to={`/authors/${auth._id}/edit`}>Edit</Link>
                                </td>

                            </tr>
                        )
                    })}


                </tbody>
            </table>

        </div>
    )
}

export default Home;