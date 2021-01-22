import React from 'react';

const Settings = ({ handleChangeParty, party }) => {
  return (
    <div className='settings'>
      <div
        onClick={handleChangeParty}
        className='settings__btn settings__btn--blue'
      >
        Blue
      </div>
      <div
        onClick={handleChangeParty}
        className='settings__btn settings__btn--red'
      >
        Red
      </div>
      <div onClick={handleChangeParty} className='settings__btn'>
        None
      </div>
      <div className='settings__selected'>{party}</div>
    </div>
  );
};

export default Settings;
