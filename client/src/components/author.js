import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {link, navigate} from '@reach/router';
import AllAuthors from './allAuthors'
import AuthorForm from './authorForm'

const NewAuthor = (props) => {
    const [ newAuthor, setNewAuthor] = useState({
        name: ""
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
            <h1>Favorite Authors</h1> 
            <AuthorForm 
                submitHandler={ submitHandler } 
                errors= { errors } 
                author={ newAuthor } 
                setAuthor = { setNewAuthor }
                buttonLabel= {"Submit"} />
            <AllAuthors/>
        </div>
    )
}

export default NewAuthor;