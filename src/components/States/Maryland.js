import React from 'react';

function Maryland({
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
      width='128'
      height='62'
      fill='none'
      viewBox='0 0 128 62'
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
        d='M125.836 52.78L127 43.905l-.997 6.575-.665 2.795-.166.329.498-.165.166-.657zm.832-15.287l-.333.165.333.986v1.973-3.124zM1 27.301l3.823 17.26 7.647-10.684 3.823-.822 7.314-5.096 4.987-1.15V23.52l5.818-4.439 9.973 1.15 4.82 8.22.5.164 7.646 1.973 5.485 3.945 5.32 2.302.498.493.665-1.315 2.826-.165 2.327 1.315-2.16 3.946v.164l-3.159 9.534 10.306 6.576 10.306.493L96.581 61l-2.826-7.89-8.81-2.96-2.161-6.739 5.485 7.233 4.488.657-3.99-3.945-3.157-11.671.83-6.74-3.49-7.397 3.657-2.959 2.66-9.534-.998 14.137 2.826 4.767 2.66-5.589 1.496 9.205-2.826 6.74 8.145 2.959-6.982 2.301 3.657 6.74 5.985 1.973 3.324-5.754-.332 8.055 5.651-.164 3.657 4.11h.167l1.163-1.48 3.325-1.48 2.161-.822-.167-.328 4.322-12.658v-.493l-.831-3.288v-.164l-15.791 4.603-13.797-38.96L95.417 1l-2.826.822L80.79 5.438 15.794 23.356 3.992 26.48 1 27.301z'
      ></path>
    </svg>
  );
}

export default Maryland;
