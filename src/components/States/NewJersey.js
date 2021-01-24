import React from 'react';

function NewJersey({
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
      height='136'
      fill='none'
      viewBox='0 0 62 136'
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
        d='M57.549 101.966l-1.328-3.197v3.197h1.328zm2.654-9.857L61 84.117l-1.593 6.927.797 1.065v0zM49.32 10.324L21.442 3.398l-4.778-1.332L12.15 1 1 25.775l4.779 5.861-.266 17.85 5.044.798 10.354 27.173-.53.8-13.01 19.18L8.7 112.09l31.327 10.657.266 12.254 7.168-10.123 1.062-14.652 7.434-5.062-2.92-10.922 5.575-13.054V52.682l-1.859-9.324-12.477.266 3.185-12.787 1.859-20.513v0z'
      ></path>
    </svg>
  );
}

export default NewJersey;
