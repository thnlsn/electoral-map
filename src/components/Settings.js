import React from 'react';

const Settings = ({
  handleChangeParty,
  handleVisualizePopulation,
  visualize,
  party,
  blue,
  red,
  none,
}) => {
  return (
    <div className='settings'>
      <div
        onClick={handleChangeParty}
        className={`settings__btn settings__btn--blue ${
          party === 'blue'
            ? 'settings__btn--selected'
            : 'settings__btn--unselected'
        }`}
      >
        Blue
      </div>
      <div
        onClick={handleChangeParty}
        className={`settings__btn settings__btn--red ${
          party === 'red'
            ? 'settings__btn--selected'
            : 'settings__btn--unselected'
        }`}
      >
        Red
      </div>
      <div
        className={`settings__btn settings__btn--population ${
          visualize === true
            ? 'settings__btn--selected'
            : 'settings__btn--unselected'
        }`}
        onClick={handleVisualizePopulation}
      >
        Visualize Points
      </div>
    </div>
  );
};

export default Settings;
