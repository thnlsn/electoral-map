import React from 'react';

function DistrictOfColumbia({
  name,
  points,
  noneStates,
  blueStates,
  redStates,
  handleClick,
  handleHover,
  handleHoverExit,
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='62'
      height='57'
      fill='none'
      viewBox='0 0 62 57'
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
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverExit}
        id={name}
        d='M1 16.468l8.572 6.875L13 25.063l3.429-1.72 3.428 1.72 12 6.875 3.429 5.156v12.031L38.714 56 61 14.75 37 1 7.857 2.72 1 16.47v-.002z'
      ></path>
    </svg>
  );
}

export default DistrictOfColumbia;
