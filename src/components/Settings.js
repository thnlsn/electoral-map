import React from 'react';

import GitHub from './Icons/GitHubIcon';
import LinkedIn from './Icons/LinkedInIcon';

const Settings = ({
  handleChangeParty,
  handleVisualizePopulation,
  visualize,
  party,
  text,
  handleReset,
}) => {
  return (
    <div className='settings'>
      {/* BLUE BUTTON */}
      <div
        onClick={handleChangeParty}
        className={`settings__btn settings__btn--blue unselectable ${
          party === 'blue'
            ? 'settings__btn--selected'
            : 'settings__btn--unselected'
        }`}
      >
        Blue
      </div>
      {/* RED BUTTON */}
      <div
        onClick={handleChangeParty}
        className={`settings__btn settings__btn--red unselectable ${
          party === 'red'
            ? 'settings__btn--selected'
            : 'settings__btn--unselected'
        }`}
      >
        Red
      </div>

      {/* VISUALIZE BUTTON */}
      <div
        className={`settings__btn settings__btn--visualize unselectable ${
          visualize === true
            ? 'settings__btn--selected'
            : 'settings__btn--unselected'
        }`}
        onClick={handleVisualizePopulation}
      >
        Visualize Points
      </div>

      {/* RESET BUTTON */}
      <div
        className={`settings__btn settings__btn--reset unselectable`}
        onClick={handleReset}
      >
        Reset
      </div>

      <hr />
      {/* Info */}
      <div className='settings__info'>
        <div className='settings__paragraph'>
          Select a color and click on states to visualize and calulate a mock
          election. You can also visualize the weight of points each state
          carries.
        </div>
      </div>

      <hr />
      {/* Info */}
      <div className='settings__info'>
        <div className='settings__heading'>{text.name}</div>
        <div className='settings__text'>
          {text.points ? `Points: ${text.points}` : ''}
        </div>
      </div>

      <hr />
      {/* Info */}
      <div className='settings__footer'>
        <div className='socials'>
          <a
            href='https://github.com/thnlsn/electoral-map'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHub />
          </a>
          <a
            href='https://www.linkedin.com/in/thnlsn/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Settings;
