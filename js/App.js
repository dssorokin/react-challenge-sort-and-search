import React from 'react';
import SortedPersonsList from './containers/SortedPersonsList';
import CurrentPerson from './containers/CurrentPersonCard';

const SortSearchApp = () => {
  return (
    <div className="app">
      <SortedPersonsList />
      <CurrentPerson />
    </div>
  );
}

export default SortSearchApp;
