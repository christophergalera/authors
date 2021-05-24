import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const AuthorForm = (props) => {
    const { submitHandler, errors, author, setAuthor, buttonLabel} = props;


    const inputChange = (e) => {
        console.log("input name: " + e.target.name);
        const inputName = e.target.name;
        console.log("input value: " + e.target.value);
        const inputValue = e.target.value;

        let updatedAuthor = { ...author };
        updatedAuthor[inputName] = inputValue;

        setAuthor(updatedAuthor);
    }


    return (
        <div>
        <form onSubmit={submitHandler}>
            <div>
            <label>Name</label>
            {
                errors.name ?
                <span className = "error-text"> {errors.name.message} </span>
                : null
            }
            <input 
                type="text"
                name="name"
                value={ author.name }
                onChange={ (e) => inputChange(e) }
                />
            </div>
            <button>{buttonLabel}</button>
            <button className= "cancelBtn" onClick={() => navigate("/")}> Cancel </button>
        </form>
        </div>
    )
    }

export default AuthorForm;
