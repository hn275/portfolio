import React from 'react';
import { Card } from './Card';
import { ReactComponent as JavaScriptSVG } from 'assets/images/javascript.svg';
import { ReactComponent as TypeScriptSVG } from 'assets/images/typescript.svg';
import { ReactComponent as ReactSVG } from 'assets/images/react.svg';
import { ReactComponent as ReduxSVG } from 'assets/images/redux.svg';
import { ReactComponent as NodeSVG } from 'assets/images/node.svg';
import { ReactComponent as ScssSVG } from 'assets/images/scss.svg';

const content = [
  {
    svg: <JavaScriptSVG />,
    name: 'JavaScript',
  },
  {
    svg: <TypeScriptSVG />,
    name: 'TypeScript',
  },
  {
    svg: <ReactSVG />,
    name: 'React.js',
  },
  {
    svg: <ReduxSVG />,
    name: 'Redux.js',
  },
  {
    svg: <NodeSVG />,
    name: 'Node.js',
  },
  {
    svg: <ScssSVG />,
    name: 'scss/sass',
  },
];

export const HardSkills = () => {
  const getSkills = () => {
    return content.map((el, idx) => {
      return (
        <Card
          key={idx}
          name={el.name}
        >
          {el.svg}
        </Card>
      );
    });
  };

  // TSX
  return <>{getSkills()}</>;
};
