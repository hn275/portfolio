import React, { useState, useEffect } from 'react';
import type { SkillType } from './types/types';
import { SkillToggler } from './components/skillsToggler/SkillToggler';
import { HardSkills } from './components/hardSkills/HardSkills';
import { ReactComponent as SkillsWaterMark } from 'assets/images/skills_watermark.svg';
import { ReactComponent as SkillsSVG } from 'assets/images/skills.svg';

export const Skills = () => {
  const [skillType, setSkillType] = useState<SkillType>('hard');
  useEffect(() => console.log(skillType), [skillType]);
  return (
    <section
      className='container--layout'
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
          <HardSkills />
        </div>
      </div>
    </section>
  );
};
