import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import { useNavigate } from "@reach/router"
import axios from 'axios'
const Edit = (props) => {
    const navigate = useNavigate()
    const { id } = props;
    const [author, setAuthor] = useState({ name: '' })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => setAuthor(res.data.author))
            .catch(err => console.log(err))
    }, [id])

    const onSubmitHandler = () => {
        axios.put(`http://localhost:8000/api/authors/update/${id}`, {
            ...author
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))

        navigate('/')
    }
    return (
        <div className="container">
            <h1>Editando ando...</h1>
            <Form onSubmitHandler={onSubmitHandler} author={author} setAuthor={setAuthor} />

        </div>
    )
}

export default Edit;