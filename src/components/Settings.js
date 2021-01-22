import React from 'react';

const Settings = ({ handleChangeParty }) => {
  return (
    <div className='settings'>
      <div onClick={handleChangeParty} className='settings__btn'>
        Blue
      </div>
      <div onClick={handleChangeParty} className='settings__btn'>
        Red
      </div>
      <div onClick={handleChangeParty} className='settings__btn'>
        None
      </div>
    </div>
  );
};

export default Settings;
