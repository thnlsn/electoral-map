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

  const [blueStates, setBlueStates] = useState([]);
  const [redStates, setRedStates] = useState([]);
  const [noneStates, setNoneStates] = useState([
    'massachusetts',
    'minnesota',
    'montana',
    'north dakota',
    'hawaii',
    'idaho',
    'washington',
    'arizona',
    'california',
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
    'oklahoma',
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

  const [selectedParty, setSelectedParty] = useState('none');

  const handleChangeParty = (e) => {
    const selectedParty = e.target.textContent.toLowerCase();
    console.log(selectedParty);
    setSelectedParty(selectedParty);
  };

  const handleClick = (selected, clicked, state, points) => {
    switch (selected) {
      case 'blue':
        //BLUE SELECTED: CLICK NONE --> ADD POINTS TO BLUE + ADD STATE TO BLUE + SUBTRACT POINTS FROM NONE + REMOVE STATE FROM NONE
        //BLUE SELECTED: CLICK BLUE --> [ADD POINTS TO NONE + ADD STATE TO NONE + SUBTRACT POINTS FROM BLUE + REMOVE STATE FROM BLUE]
        //BLUE SELECTED: CLICK RED --> ADD POINTS TO BLUE + ADD STATE TO BLUE + SUBTRACT POINTS FROM RED + REMOVE STATE FROM RED//
        if (clicked === 'none') {
          setBluePts(bluePts + points);
          setBlueStates([...blueStates, state]);
          setNonePts(nonePts - points);
          setNoneStates(noneStates.filter((noneState) => noneState !== state));
        } else if (clicked === 'blue') {
          setNonePts(nonePts + points);
          setNoneStates([...noneStates, state]);
          setBluePts(bluePts - points);
          setBlueStates(blueStates.filter((blueState) => blueState !== state));
        } else {
          setBluePts(bluePts + points);
          setBlueStates([...blueStates, state]);
          setRedPts(redPts - points);
          setRedStates(redStates.filter((redState) => redState !== state));
        }
        break;
      case 'red':
        //RED SELECTED: CLICK NONE --> ADD POINTS TO RED + ADD STATE TO RED + SUBTRACT POINTS FROM NONE + REMOVE STATE FROM NONE
        //RED SELECTED: CLICK BLUE --> ADD POINTS TO RED + ADD STATE TO RED + SUBTRACT POINTS FROM BLUE + REMOVE STATE FROM BLUE
        //RED SELECTED: CLICK RED --> {ADD POINTS TO NONE + ADD STATE TO NONE + SUBTRACT POINTS FROM RED + REMOVE STATE FROM RED}
        if (clicked === 'none') {
          setRedPts(redPts + points); // +pts red
          setRedStates([...redStates, state]); // +state red
          setNonePts(nonePts - points); // -pts none
          setNoneStates(noneStates.filter((noneState) => noneState !== state)); // -state none
        } else if (clicked === 'blue') {
          setRedPts(redPts + points);
          setRedStates([...redStates, state]);
          setBluePts(bluePts - points);
          setBlueStates(blueStates.filter((blueState) => blueState !== state));
        } else {
          setNonePts(nonePts + points);
          setNoneStates([...noneStates, state]);
          setRedPts(redPts - points);
          setRedStates(redStates.filter((redState) => redState !== state));
        }
        break;
      default:
        //NONE SELECTED: CLICK NONE --> DO NOTHING
        //NONE SELECTED: CLICK BLUE --> [ADD POINTS TO NONE + ADD STATE TO NONE + SUBTRACT POINTS FROM BLUE + REMOVE STATE FROM BLUE]
        //NONE SELECTED: CLICK RED --> {ADD POINTS TO NONE + ADD STATE TO NONE + SUBTRACT POINTS FROM RED + REMOVE STATE FROM RED}
        if (clicked === 'none') {
          return;
        } else if (clicked === 'blue') {
          setNonePts(nonePts + points);
          setNoneStates([...noneStates, state]);
          setBluePts(bluePts - points);
          setBlueStates(blueStates.filter((blueState) => blueState !== state));
        } else {
          setNonePts(nonePts + points);
          setNoneStates([...noneStates, state]);
          setRedPts(redPts - points);
          setRedStates(redStates.filter((redState) => redState !== state));
        }
    }
  };

  const logData = (e) => {
    let state = e.target.id;
    let points = Number(e.target.dataset.points);
    let clickedParty = e.target.dataset.party;
    /*     addPts(points, selectedParty, clickedParty);
    addToParty(selectedParty, clickedParty, name); */
    handleClick(selectedParty, clickedParty, state, points);
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
