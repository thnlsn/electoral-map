import React from 'react';

function Delaware({
  name,
  points,
  noneStates,
  blueStates,
  redStates,
  handleClick,
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='62'
      height='94'
      fill='none'
      viewBox='0 0 62 94'
    >
      <path
        className={`map__state ${
          noneStates.includes(name)
            ? 'none'
            : blueStates.includes(name)
            ? 'blue'
            : 'red'
        }`}
        data-party={
          noneStates.includes(name)
            ? 'none'
            : blueStates.includes(name)
            ? 'blue'
            : 'red'
        }
        data-points={points}
        onClick={handleClick}
        id={name}
        d='M1 11.937l1.277 4.825L28.767 93l30.318-9.007-.319-.643h.638l.958.321.638-.321-.638-1.287-7.66-20.588-37.34-35.706L16.957 1h-7.66L3.554 5.504 1 11.937h0z'
      ></path>
    </svg>
  );
}

export default Delaware;
