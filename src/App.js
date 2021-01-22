import React, { useState } from 'react';
import './css/style.css';

import Bar from './components/PointBar';
import Map from './components/UnitedStates';

import states from './states';

function App() {
  const [blue, setBlue] = useState(0);
  const [none, setNone] = useState(538);
  const [red, setRed] = useState(0);

  const [party, setParty] = useState('none');

  const logData = (e) => {
    let data = e.target.id;
    let points = e.target.dataset.points;
    console.log(data);
    console.log(points);
  };

  return (
    <main className='App'>
      <Bar blue={blue} red={red} none={none} />
      <Map states={states} handleClick={logData} />
    </main>
  );
}

export default App;

/* 

  const incrementBlue = () => {
    const bluePoints = blue;
    const nonePoints = none;
    setBlue(bluePoints + 1);
    setNone(nonePoints - 1);
  };
  const incrementRed = () => {
    const redPoints = red;
    const nonePoints = none;
    setRed(redPoints + 1);
    setNone(nonePoints - 1);
  };

*/
