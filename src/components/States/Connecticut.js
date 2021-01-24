import React from 'react';

function Connecticut({
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
      height='64'
      fill='none'
      viewBox='0 0 62 64'
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
        d='M52.042 1l-30 11.367-.417-1.034-16.875 4.96L1 17.327l.417 2.066 7.916 30.38 2.5 3.1-5.416 6.614L10.167 63 22.25 51.427l6.458-8.887 1.25 2.48 30.417-13.433.625-.62-.208-4.96-1.25-4.34-6.459-17.98-.833-2.274L52.041 1h0z'
      ></path>
    </svg>
  );
}

export default Connecticut;
