import React from 'react';

function NewHampshire({
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
      height='130'
      fill='none'
      viewBox='0 0 62 130'
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
        d='M13.436 1L10.6 4.495 7.327 3.84 5.582 18.256v.218l5.236 19.66-.436 3.93L1 54.516l2.4 11.359v14.198L1.655 93.177 11.473 129l8.945-2.84 27.491-9.174 12.436-13.542v-3.495l.655-5.68-1.527.656-.219-1.31-13.745-16.82-.437-1.529L13.436 1h0z'
      ></path>
    </svg>
  );
}

export default NewHampshire;
