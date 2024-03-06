import React from 'react';
import { useParams } from 'react-router-dom';

function Booklist() {
  // Access the "id" parameter from the URL
  const { id } = useParams();

  return (
    <div>
      <h2>Booklist Component</h2>
      <p>Selected Book ID: {id}</p>
      {/* Rest of the component logic */}
    </div>
  );
}
export default Booklist; 