import React from 'react';

import Vermont from './States/Vermont';
import NewHampshire from './States/NewHampshire';
import Massachusetts from './States/Massachusetts';
import RhodeIsland from './States/RhodeIsland';
import Connecticut from './States/Connecticut';
import NewJersey from './States/NewJersey';
import Delaware from './States/Delaware';
import Maryland from './States/Maryland';
import DistrictOfColumbia from './States/DistrictOfColumbia';

const States = ({ states, handleClick, blueStates, redStates, noneStates }) => {
  return (
    <div className='states'>
      <Vermont
        states={states}
        noneStates={noneStates}
        blueStates={blueStates}
        redStates={redStates}
        name={'vermont'}
        points={3}
        handleClick={handleClick}
      />
      <NewHampshire
        states={states}
        noneStates={noneStates}
        blueStates={blueStates}
        redStates={redStates}
        name={'new-hampshire'}
        points={4}
        handleClick={handleClick}
      />
      <Massachusetts
        states={states}
        noneStates={noneStates}
        blueStates={blueStates}
        redStates={redStates}
        name={'massachusetts'}
        points={11}
        handleClick={handleClick}
      />
      <RhodeIsland
        states={states}
        noneStates={noneStates}
        blueStates={blueStates}
        redStates={redStates}
        name={'rhode-island'}
        points={4}
        handleClick={handleClick}
      />
      <Connecticut
        states={states}
        noneStates={noneStates}
        blueStates={blueStates}
        redStates={redStates}
        name={'connecticut'}
        points={7}
        handleClick={handleClick}
      />
      <NewJersey
        states={states}
        noneStates={noneStates}
        blueStates={blueStates}
        redStates={redStates}
        name={'new-jersey'}
        points={14}
        handleClick={handleClick}
      />
      <Delaware
        states={states}
        noneStates={noneStates}
        blueStates={blueStates}
        redStates={redStates}
        name={'delaware'}
        points={3}
        handleClick={handleClick}
      />
      <Maryland
        states={states}
        noneStates={noneStates}
        blueStates={blueStates}
        redStates={redStates}
        name={'maryland'}
        points={10}
        handleClick={handleClick}
      />
      <DistrictOfColumbia
        states={states}
        noneStates={noneStates}
        blueStates={blueStates}
        redStates={redStates}
        name={'district-of-columbia'}
        points={3}
        handleClick={handleClick}
      />
    </div>
  );
};

export default States;
