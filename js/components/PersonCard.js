import React from 'react';

const PersonCard = ({ person }) => {
  return (
    <div className="personCard">
      <div className="personCard__image">
        <img src={`/images/${person.image}.svg`} />
      </div>
      <div className="personCard__name">
        {person.name}
      </div>
      <div className="personCard__age">
        {person.age}
      </div>
      <div className="personCard__phone">
        {person.phone}
      </div>
      <div className="personCard__phrase">
        {person.phrase}
      </div>
    </div>
  );
};

export default PersonCard;
