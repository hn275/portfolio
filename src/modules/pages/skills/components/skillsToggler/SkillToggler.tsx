import React from 'react';
import type { SkillType } from '../../types/types';
import './SkillToggler.scss';

interface SkillTogglerType {
  skill: SkillType;
  setSkill: React.Dispatch<React.SetStateAction<SkillType>>;
}

export const SkillToggler: React.FC<SkillTogglerType> = ({
  skill,
  setSkill,
}) => {
  const handleClick = (event: React.MouseEvent, skillType: SkillType): void => {
    event.preventDefault();
    setSkill(skillType);
  };
  return (
    <div className='skill--toggler'>
      <div className='current-skill'>
        <span
          onClick={(event) => handleClick(event, 'hard')}
          className={skill === 'hard' ? 'skill--active' : ''}
        >
          Hard
        </span>{' '}
        <span className='skill--toggler-divider'>|</span>
        &nbsp;
        <span
          onClick={(event) => handleClick(event, 'soft')}
          className={skill === 'soft' ? 'skill--active' : ''}
        >
          Soft
        </span>
      </div>
    </div>
  );
};
