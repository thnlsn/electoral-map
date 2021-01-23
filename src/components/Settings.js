import React from 'react';

const Settings = ({ handleChangeParty, party, blue, red, none }) => {
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
        onClick={handleChangeParty}
        className={`settings__btn settings__btn ${
          party === 'none'
            ? 'settings__btn--selected'
            : 'settings__btn--unselected'
        }`}
      >
        None
      </div>
    </div>
  );
};

export default Settings;
