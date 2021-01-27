import React from 'react';

const PointBar = ({ bluePts, redPts, nonePts }) => {
  return (
    <div
      className='bar'
      data-winner={
        bluePts >= 270
          ? 'Blue wins!' // If blue has 270 or more, blue wins.
          : redPts >= 270
          ? 'Red wins!' // If red has 270 or more, red wins.
          : nonePts === 0
          ? 'There is a tie! The vote shall go to the House.' // If both red and blue do not have 270 AND none is at 0, it must be a 269/269 tie.
          : '270 to win'
      } // Otherwise, if neither have 270, a winner has yet to be determined.
      style={{
        gridTemplateColumns: `[bar-start blue-start] ${bluePts}fr [blue-end none-start] ${nonePts}fr [none-end red-start] ${redPts}fr [red-end bar-end]`,
        color: `${
          bluePts >= 270 ? '#5154fb' : redPts >= 270 ? '#bc504b' : '#d9c882'
        }`,
      }}
    >
      <div className='bar__blue' data-content={bluePts < 15 ? '' : bluePts} />
      <div className='bar__none' data-content={nonePts < 15 ? '' : nonePts} />
      <div className='bar__red' data-content={redPts < 15 ? '' : redPts} />
    </div>
  );
};

export default PointBar;
