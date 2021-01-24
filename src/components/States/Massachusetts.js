import React from 'react';

function Massachusetts({
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
      width='102'
      height='62'
      fill='none'
      viewBox='0 0 102 62'
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
        d='M83.971 60.816l-.543-.368V61l.543-.184zm-5.435-4.97l1.268-.551v-.737l-1.268 1.289zM101 41.492l-.181-2.577-.363-1.472.544 4.049zM21.833 22.534l-1.268.552-10.326 3.129-3.623 1.288-4.167 1.288L1 29.344v.552l.544 9.57.543 8.835.543 8.098.906.552 3.261-.92 14.674-4.417.362.92L47.92 42.41l.181.368 2.356-.92 8.333-3.313 7.97 9.755 1.088-.92.543-2.761-.18 4.417h1.81l.544 2.208 1.63 3.13 8.515-10.492 7.065 2.393 1.63-3.68L101 36.336l-4.891-9.754 1.268 6.258-5.978 4.6-6.703.553-13.406-14.54-5.978-9.202L71.29 7.81l-6.16-.368-2.536-6.074L62.413 1 52.087 12.411l-22.826 7.73-7.428 2.393z'
      ></path>
    </svg>
  );
}

export default Massachusetts;
