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

  const [blueStates, setBlueStates] = useState(['california']);
  const [redStates, setRedStates] = useState(['oklahoma']);
  const [noneStates, setNoneStates] = useState([
    'massachusetts',
    'minnesota',
    'montana',
    'north dakota',
    'hawaii',
    'idaho',
    'washington',
    'arizona',
    //'california',
    'colorado',
    'nevada',
    'new mexico',
    'oregon',
    'utah',
    'wyoming',
    'arkansas',
    'iowa',
    'kansas',
    'missouri',
    'nebraska',
    //'oklahoma',
    'south dakota',
    'louisiana',
    'texas',
    'connecticut',
    'new hampshire',
    'rhode island',
    'vermont',
    'alabama',
    'florida',
    'georgia',
    'mississippi',
    'south carolina',
    'illinois',
    'indiana',
    'kentucky',
    'north carolina',
    'ohio',
    'tennessee',
    'virginia',
    'wisconsin',
    'west virginia',
    'delaware',
    'district of columbia',
    'maryland',
    'new jersey',
    'new york',
    'pennsylvania',
    'maine',
    'michigan',
    'alaska',
  ]);

  console.log(noneStates.length);

  const [selectedParty, setSelectedParty] = useState('none');

  const handleChangeParty = (e) => {
    const selectedParty = e.target.textContent.toLowerCase();
    console.log(selectedParty);
    setSelectedParty(selectedParty);
  };

  const addPts = (points, selectedParty, clickedParty) => {
    //// We need...
    // the amount of points for the state clicked (so we know how much points to add/subtract)
    // the party selected by user (the one we add points to)
    // the party of the state currently clicked (so we can remove the points from it, or if it is equal to the selected party, set it to none (if it colored) else do nothing
    switch (selectedParty) {
      case 'blue':
        const newBluePoints = bluePts + points;
        setBluePts(newBluePoints);
        break;
      case 'red':
        const newRedPoints = redPts + points;
        setRedPts(newRedPoints);
        break;
      default:
        const newNonePoints = nonePts + points;
        setNonePts(newNonePoints);
    }
  };

  const addToParty = () => {
    //// We need
    // the selected party (so we know what party to add state to and the color to change the state to)
  };

  const logData = (e) => {
    let data = e.target.id;
    let points = Number(e.target.dataset.points);
    let key = Number(e.target.dataset.key);
    let party = e.target.dataset.party;
    addPts(points, selectedParty, party);
  };

  useEffect(() => {
    console.log('rerender');
  }, []);

  return (
    <main className='App'>
      <Bar bluePts={bluePts} redPts={redPts} nonePts={nonePts} />
      <Settings
        handleChangeParty={handleChangeParty}
        party={selectedParty}
        blue={bluePts}
        red={redPts}
        none={nonePts}
      />
      <Map
        states={states}
        handleClick={logData}
        blueStates={blueStates}
        redStates={redStates}
        noneStates={noneStates}
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

//let data = e.target.id;
//let points = Number(e.target.dataset.points);
//let key = Number(e.target.dataset.key);
//let party = e.target.dataset.party;
//console.log(data);
//console.log(points);
//console.log(key);
//console.log(party);
