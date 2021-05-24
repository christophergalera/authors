import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import AuthorForm from './authorForm'
import Header from './header'

const NewAuthor = (props) => {
    const [ newAuthor, setNewAuthor] = useState({
        name: "",
    })


    const [ errors, setErrors] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/author', newAuthor)
            .then((res) => {
            console.log(res.data);
            navigate("/")
            })
            .catch((err) => {
                console.log(err); 
                setErrors(err.response.data.errors);     
            })

    }

    return ( 
        <div>
            <div class= "header">
                <Header/>
                <Link to={'/'}> home  </Link>
            </div>
            <h3>Add a new Author:</h3>
            <AuthorForm 
                submitHandler={ submitHandler } 
                errors= { errors } 
                author={ newAuthor } 
                setAuthor = { setNewAuthor }
                buttonLabel= {"Submit"} />
        </div>
    )
}

export default NewAuthor;