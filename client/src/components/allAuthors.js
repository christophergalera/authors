import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link , navigate } from '@reach/router';
import Header from './header'

const AllAuthors= (props) => {
    const [ allAuthors, setAllAuthors ] = useState([]);

    useEffect(() => {
    // axios call the route for getAll
    axios.get('http://localhost:8000/api/productmanager/')
        .then((res) => {
            console.log(res.data);  // this is the body that we see in postman's results
            setAllAuthors(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then((res) => {
                console.log(res.data);
                let filteredAuthor = allAuthors.filter((oneAuthor) => {
                return oneAuthor._id !== authorId;
                })
        
                setAllAuthors( filteredAuthor);
            })
            .catch((err) => {
                console.log(err);
                navigate('/');
            })
        }
    
    return (
        <div>
            <Header/>
            <Link to={'/authors/new'}>Add an author</Link>
            <h3>We have quotes by: </h3>
            <table>
                <thead>
                <th>Author</th>
                <th>Actions Available</th>
                </thead>
                <tbody>
                {
                    allAuthors.map(( author, index ) => (
                        <tr>
                            <td>
                                <Link to={ "/authors/" + author._id }>{ author.title }</Link>
                            </td>
                            <td>
                                <button className="editBtn" onClick={() => navigate('/authors/' + author._id + '/edit')}>Edit</button>
                                <button className="deleteBtn" onClick={() => deleteAuthor(author._id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default AllAuthors;
