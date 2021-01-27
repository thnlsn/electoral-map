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
            className={`map__state map__state--${
              visualize ? 'visualize' : 'default'
            } ${
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
              visualize // If visualize is true, continue
                ? noneStates.includes(state.name) // If the state is a noneState
                  ? hovered === state.name
                    ? {
                        fill: `rgba(217, 200, 130, 0.5)`, // noneState color based on points and if it's hovered
                      }
                    : {
                        fill: `rgba(217, 200, 130, calc(${state.points} / 46))`, // noneState color based on points
                      }
                  : blueStates.includes(state.name) // If the state is a blueState
                  ? hovered === state.name
                    ? {
                        fill: `rgba(40, 44, 250, 0.5)`, // blueState color based on points and if it's hovered
                      }
                    : {
                        fill: `rgba(40, 44, 250, calc(${state.points} / 46))`, // blueState color based on points
                      }
                  : hovered === state.name
                  ? {
                      fill: `rgba(173, 33, 73, 0.5)`, // redState color based on points and if it's hovered
                    }
                  : {
                      fill: `rgba(173, 33, 73, calc(${state.points} / 46))`, // redState color based on points
                    }
                : {} // If visualize is false, do nothing
            }
          ></path>
        ))}
        <path
          className='map__line'
          id='line-rhode-island'
          d='M794.244 132.945L801.244 163.945'
        ></path>
        <path
          className='map__line'
          id='line-delaware'
          d='M761.037 204.753L788.037 208.753'
        ></path>
        <path
          className='map__line'
          id='line-district-of-columbia'
          d='M731.214 207.871L789.214 303.871'
        ></path>
      </g>
    </svg>
  );
}

export default UnitedStates;

//10.549019607843

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
