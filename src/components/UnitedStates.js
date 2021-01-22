import React from 'react';

function UnitedStates({ states, handleClick, blueStates, redStates }) {
  const colorExists = () => {
    console.log(this);
    return 'none';
  };

  console.log(blueStates);

  return (
    <svg
      className='map-container'
      xmlns='http://www.w3.org/2000/svg'
      width='1000'
      height='589'
      // fill='none'
      viewBox='0 0 1000 589'
    >
      <g className='map'>
        {states.map((state, index) => (
          <path
            className={`map__state ${
              blueStates.includes(index) ? 'blue' : 'none'
            }`}
            id={`${state.name}`}
            d={state.path}
            onClick={handleClick}
            data-points={state.points}
            data-key={index}
            key={index}
          ></path>
        ))}
      </g>
    </svg>
  );
}

export default UnitedStates;
