import React from 'react';

const AuthorTable = ({ authors, onRemove }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {authors.map(author => (
          <tr key={author.id}>
            <td>{author.name}</td>
            <td>{author.surname}</td>
            <td>
              <button onClick={() => onRemove(author.id)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AuthorTable;
