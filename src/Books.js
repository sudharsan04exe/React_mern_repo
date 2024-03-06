import React from 'react'
import { useParams } from 'react-router-dom';

const Books =() =>{
    const { id } = useParams();
    return (
        <div>
            <h1>Books</h1>
            <p>Selected Book ID: {id}</p>
           
        </div>
    );  
}
export default Books;