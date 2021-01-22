import React, { useState, useEffect } from 'react';
import './css/style.css';

import Bar from './components/PointBar';
import Settings from './components/Settings';
import Map from './components/UnitedStates';

import states from './states';

function App() {
  const [bluePts, setBluePts] = useState(0);
  const [nonePts, setNonePts] = useState(538);
  const [redPts, setRedPts] = useState(0);

  const [blueStates, setBlueStates] = useState([8]);
  const [noneStates, setNoneStates] = useState([]);
  const [redStates, setRedStates] = useState([]);

  const [party, setParty] = useState('none');

  const handleChangeParty = (e) => {
    const selectedParty = e.target.textContent.toLowerCase();
    console.log(selectedParty);
    setParty(selectedParty);
  };

  const logData = (e) => {
    let data = e.target.id;
    let points = e.target.dataset.points;
    let key = Number(e.target.dataset.key);
    console.log(data);
    console.log(points);
    console.log(key);

    console.log(blueStates.includes(key));
  };

  useEffect(() => {
    console.log('rerender');
  }, []);

  return (
    <main className='App'>
      <Bar bluePts={bluePts} redPts={redPts} nonePts={nonePts} />
      <Settings handleChangeParty={handleChangeParty} party={party} />
      <Map
        states={states}
        handleClick={logData}
        blueStates={blueStates}
        redStates={redStates}
      />
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
