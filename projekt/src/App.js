import React, { useState, useEffect } from 'react';
import AuthorTable from './elements/AuthorTable';
import AuthorForm from './elements/AuthorForm';
import './styles/Main.css';

const App = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/authors')
      .then(response => response.json())
      .then(data => setAuthors(data));
  }, []);

  const handleRemove = (id) => {
    fetch(`http://localhost:8000/authors/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setAuthors(authors.filter(author => author.id !== id));
      });
  };

  const handleAdd = (newAuthor) => {
    fetch('http://localhost:8000/authors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAuthor),
    })
      .then(response => response.json())
      .then(data => {
        setAuthors([...authors, data]);
      });
  };

  return (
    <div className="App">
      <h1>Authors</h1>
      <AuthorForm onSubmit={handleAdd} />
      <AuthorTable authors={authors} onRemove={handleRemove} />
    </div>
  );
}

export default App;
