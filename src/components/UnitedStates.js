import React from 'react';

function UnitedStates({
  states,
  handleClick,
  blueStates,
  redStates,
  noneStates,
}) {
  return (
    <svg
      className='map-container'
      xmlns='http://www.w3.org/2000/svg'
      width='1000'
      height='589'
      // fill='none'
      viewBox='0 0 1000 589'
    >
      <defs>
        <filter id='f1' x='0' y='0' width='200%' height='200%'>
          <feOffset result='offOut' in='SourceGraphic' dx='20' dy='20' />
          <feBlend in='SourceGraphic' in2='offOut' mode='normal' />
        </filter>
      </defs>
      <g className='map'>
        {states.map((state, index) => (
          <path
            className={`map__state ${
              noneStates.includes(state.name)
                ? 'none'
                : blueStates.includes(state.name)
                ? 'blue'
                : 'red'
            }`}
            id={`${state.name}`}
            d={state.path}
            onClick={handleClick}
            data-points={state.points}
            data-party={
              noneStates.includes(state.name)
                ? 'none'
                : blueStates.includes(state.name)
                ? 'blue'
                : 'red'
            }
            key={index}
          ></path>
        ))}
      </g>
    </svg>
  );
}

export default UnitedStates;
