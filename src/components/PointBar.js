import React from 'react';

const PointBar = ({ bluePts, redPts, nonePts }) => {
  return (
    <div
      className='bar'
      style={{
        gridTemplateColumns: `[bar-start blue-start] ${bluePts}fr [blue-end none-start] ${nonePts}fr [none-end red-start] ${redPts}fr [red-end bar-end]`,
      }}
    >
      <div className='bar__blue' data-content={bluePts} />
      <div className='bar__none' data-content={nonePts} />
      <div className='bar__red' data-content={redPts} />
    </div>
  );
};

export default PointBar;
