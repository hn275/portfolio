import React from 'react';
import { ResumeButton } from 'modules/common/components/resumeButton';
import { ReactComponent as StaticAssets } from 'assets/images/static_assets.svg';
import './Home.scss';

export const Home = () => {
  return (
    <header className='container--layout'>
      <div className='svg--static-header'>
        <StaticAssets />
      </div>

      <div className='banner'>
        Hi, I'm <h1 className='text-dropshadow'>Hal</h1>
        <div>a web developer</div>
        <div>and a dark-theme enthusiast</div>
        <div className='btn--header-resume'>
          <ResumeButton />
        </div>
      </div>
    </header>
  );
};
