import React from 'react';

const PointBar = ({ blue, red, none }) => {
  return (
    <div
      className='bar'
      style={{
        gridTemplateColumns: `[bar-start blue-start] ${blue}fr [blue-end none-start] ${none}fr [none-end red-start] ${red}fr [red-end bar-end]`,
      }}
    >
      <div className='bar__blue'></div>
      <div className='bar__none'></div>
      <div className='bar__red'></div>
    </div>
  );
};

export default PointBar;
