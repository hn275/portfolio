import React, { useState } from 'react';
import type { SkillType } from './types/types';
import { SkillToggler } from './components/skillsToggler/SkillToggler';
import { SkillList } from './components/skillList/skillList';
import { ReactComponent as SkillsWaterMark } from 'assets/images/skills_watermark.svg';
import { ReactComponent as SkillsSVG } from 'assets/images/skills.svg';
import './styles/Skills.scss';

export const Skills = () => {
  const [skillType, setSkillType] = useState<SkillType>('hard');

  return (
    <section
      className='container--layout flex-center'
      id='skills'
    >
      <div className='svg--skills-page'>
        <div className='svg--skills'>
          <SkillsSVG />
        </div>
        <div className='svg--watermark'>
          <SkillsWaterMark />
        </div>
      </div>

      <div className='skills--content'>
        <SkillToggler
          skill={skillType}
          setSkill={setSkillType}
        />

        <h1>
          <span className='text-dropshadow'>skills</span> I've accquired
        </h1>

        <div className='skill--list'>
          <SkillList displaySkill={skillType} />
        </div>
      </div>
    </section>
  );
};
