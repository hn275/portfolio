import React from 'react';
import { svgs } from '../../util/conent';

export const HardSkills = () => {
  // BUG: didnt work lmao gg
  const getSVGS = (): any => {
    return svgs.map((content) => {
      <>
        <div>{content.svg}</div>
        <div>{content.title}</div>
      </>;
    });
  };
  return (
    <section id='skills--hard-skill'>
      <div>{svgs[0].title}</div>
    </section>
  );
};
