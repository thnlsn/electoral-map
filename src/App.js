import React from 'react';
import './css/style.css';

import Map from './components/UnitedStates';

import states from './states';

function App() {
  const logData = (e) => {
    let data = e.target.id;
    let points = e.target.dataset.points;
    console.log(data);
    console.log(points);
  };

  return (
    <div className='App'>
      <Map states={states} handleClick={logData} />
    </div>
  );
}

export default App;
