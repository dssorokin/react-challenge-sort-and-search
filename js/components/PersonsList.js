import React from 'react';
import PersonsForm from './PersonsForm';

const PersonsList = ({ persons }) => {
  return (
    <div>
    	<PersonsForm />
      {persons.map(p =>
        <div className="person">
          {p.name}
        </div>
      )}
    </div>
  );
}


export default PersonsList;