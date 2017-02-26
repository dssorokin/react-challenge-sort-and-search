import React from 'react';
import SearchPersonForm from '../containers/SearchPersonsForm';

const PersonsList = ({ persons, onClick }) => {
  return (
    <div>
    	<SearchPersonForm />
      <table className="personsTable">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Phrase</th>
          </tr>
        </thead>
        <tbody>
          {persons.map(p =>
            <tr key={p.id} className="person" onClick={() => onClick(p)}>
              <td><img src={`/images/${p.image}.svg`} /></td>
              <td>{p.name}</td>
              <td>{p.age}</td>
              <td>{p.phone}</td>
              <td>{p.phrase}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};


export default PersonsList;
