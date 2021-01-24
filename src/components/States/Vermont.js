import React from 'react';

function Vermont({
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
      height='119'
      viewBox='0 0 62 119'
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
        d='M61 109.827l-9.643-35.272 1.715-12.904V47.67l-2.358-11.184 9.215-12.26.428-3.87L55.214 1 52.43 2.075 40.643 6.377l-11.572 4.516L2.5 20.572l-1.5.43 9.643 22.583 3.214 21.292 11.357 17.85L35.93 118l.428-.215 1.715-.645L43 115.634l4.286-1.505 12.214-3.657 1.5-.645v0z'
      ></path>
    </svg>
  );
}

export default Vermont;
