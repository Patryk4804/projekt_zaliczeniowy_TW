import React, { useState } from 'react';

const AuthorForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, surname });
    setName('');
    setSurname('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Surname:</label>
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>
      <button type="submit">Add Author</button>
    </form>
  );
};

export default AuthorForm;
