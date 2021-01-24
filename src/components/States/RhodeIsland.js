import React from 'react';

function NewHampshire({
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
      height='77'
      fill='none'
      viewBox='0 0 62 77'
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
        d='M44.76 51.15l-.452-9.487-1.353 3.614 1.804 5.874h0zm9.022-7.228l-5.865-11.295-.451 11.746 6.316-.451v0zm-2.707-14.006l3.158 8.132 4.06 7.23L61 39.855l-4.06-7.681-1.354-5.422h-4.51v3.163zM1 11.392l1.805 4.97L16.79 55.668l2.706 9.488L19.948 76l.902-1.356 21.654-17.168-4.06-30.723 9.022-1.807L27.616 1 6.866 9.133 1 11.392h0z'
      ></path>
    </svg>
  );
}

export default NewHampshire;
