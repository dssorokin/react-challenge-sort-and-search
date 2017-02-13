import React from 'react';

const PersonsList = ({ persons }) => {
  return (
    <div>
      {persons.map(p =>
        <div className="person">
          {p.name}
        </div>
      )}
    </div>
  );
}


export default PersonsList;