import React, { useEffect } from 'react';
import { BtnMain, BtnSecondary } from 'modules/common/components/buttons';
import { ReactComponent as StaticAssets } from 'assets/images/static_assets.svg';
import { useRedirect } from 'hooks';
import './Home.scss';

interface HomeProps {
  setHasNav: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Home: React.FC<HomeProps> = ({ setHasNav }) => {
  const navigate = useRedirect();
  const handlePortfolioClick = (event: React.MouseEvent) => {
    event.preventDefault();
    navigate('/portfolio');
  };

  useEffect(() => {
    setHasNav(() => false);
    return () => setHasNav(() => true);
  });

  return (
    <header className='container--layout'>
      <div className='svg--static-header'>
        <StaticAssets />
      </div>

      <div className='banner'>
        Hi, I'm <h1 className='text-dropshadow'>Hal</h1>
        <div>a web developer</div>
        <div>and a dark-theme enthusiast</div>
        <div className='btn--header'>
          <div className='btn--header-resume'>
            <BtnMain>Resume</BtnMain>
          </div>
          <div className='btn--header-portfolio'>
            <BtnSecondary handleClick={handlePortfolioClick}>
              Portfolio
            </BtnSecondary>
          </div>
        </div>
      </div>
    </header>
  );
};
