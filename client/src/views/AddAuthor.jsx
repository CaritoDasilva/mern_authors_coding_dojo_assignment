import React, { useState } from 'react';
import { navigate } from "@reach/router"
import axios from 'axios';
import Form from '../components/Form';
const AddAuthor = () => {
    const [errors, setErrors] = useState([]);
    const [author, setAuthor] = useState({ name: '' })
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors/new', {
            ...author
        })
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                console.log(errorResponse)
                setErrors(errorResponse);
            })

    }
    return (
        <div className="container">
            <Form author={author} setAuthor={setAuthor} onSubmitHandler={onSubmitHandler} errors={errors} />
        </div>
    )
}

export default AddAuthor;