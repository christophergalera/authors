import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import AuthorForm from './authorForm';
import Header from './header'


const EditAuthor = (props) => {
    const { id } = props;

    const [ editAuthor, setEditAuthor ] = useState({
        title: "",
    });

  const [ errors, setErrors ] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8000/api/author/" + id)
      .then((res) => {
        console.log(res.data);
        setEditAuthor(res.data);
      })
      .catch((err) => {
        console.log(err);
        navigate("/");
      })
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    axios.put('http://localhost:8000/api/author/' + id, editAuthor)
      .then((res) => {
        console.log(res.data);
        // go to the details page when it is successful
        navigate("/author/" + id);
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
        setErrors(err.response.data.errors);
      })
  }

  const deleteAuthor = () => {
    axios.delete('http://localhost:8000/api/author/' + id)
      .then((res) => {
        console.log(res.data);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
        navigate('/');
      })
  }
 
  return (
    <div>
        <Header/>
        <Link to={'/'}>Home</Link>
        <h3>Edit This Author</h3>
        <AuthorForm 
            submitHandler={ submitHandler } 
            errors={ errors } 
            author={ editAuthor } 
            setAuthor={ setEditAuthor }
            buttonLabel={"Submit"}
            />
        <button className="deleteBtn" onClick={ deleteAuthor }>Delete Author </button>
        </div>
    )
}

export default EditAuthor;
