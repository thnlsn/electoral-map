import React from 'react';

function UnitedStates({
  states,
  handleClick,
  visualize,
  blueStates,
  redStates,
  noneStates,
  hovered,
  handleHover,
  handleHoverExit,
}) {
  return (
    <svg
      className='map-container'
      xmlns='http://www.w3.org/2000/svg'
      width='832'
      height='530'
      viewBox='0 0 832 530'
    >
      <g className='map'>
        {states.map((state, index) => (
          <path
            className={`map__state ${
              noneStates.includes(state.name)
                ? 'none'
                : blueStates.includes(state.name)
                ? 'blue'
                : 'red'
            } ${hovered === state.name ? 'hovered' : 'unhovered'}`}
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
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverExit}
            style={
              visualize
                ? noneStates.includes(state.name)
                  ? {
                      fill: `rgba(217, 200, 130, calc(${state.points} / 40))`, // Divide by 55 because 55 is the max points (CA) and that would equate to a 1.0 opacity
                      stroke: '#988c5b',
                    }
                  : blueStates.includes(state.name)
                  ? {
                      fill: `rgba(40, 44, 250, calc(${state.points} / 40))`, // Divide by 55 because 55 is the max points (CA) and that would equate to a 1.0 opacity
                      stroke: '#988c5b',
                    }
                  : {
                      fill: `rgba(173, 33, 73, calc(${state.points} / 40))`, // Divide by 55 because 55 is the max points (CA) and that would equate to a 1.0 opacity
                      stroke: '#988c5b',
                    }
                : {}
            }
          ></path>
        ))}
      </g>
    </svg>
  );
}

export default UnitedStates;

// Check if visualize is true
//// If yes, check if state is blue or red currently
////// If yes, check if blue
//////// If yes, make color blue opacity
//////// If no, make color red opacity
////// If no, make color gold opacity
//// If no, make colors default

//GOLD
/* {
  fill: `rgba(217, 200, 130, calc(${state.points} / 40))`, // Divide by 55 because 55 is the max points (CA) and that would equate to a 1.0 opacity
  stroke: '#988c5b',
} */

//BLUE
/* {
  fill: `rgba(40, 44, 250, calc(${state.points} / 40))`, // Divide by 55 because 55 is the max points (CA) and that would equate to a 1.0 opacity
  stroke: '#988c5b',
} */

//RED
/* {
  fill: `rgba(173, 33, 73, calc(${state.points} / 40))`, // Divide by 55 because 55 is the max points (CA) and that would equate to a 1.0 opacity
  stroke: '#988c5b',
} */

/*     <svg
      className='map-container'
      xmlns='http://www.w3.org/2000/svg'
      width='1000'
      height='589'
      viewBox='0 0 1000 589'
    >
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
    </svg> */
