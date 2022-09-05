import React, { useRef, useEffect } from 'react';
import type { SkillType } from '../../types/types';
import { HardSkills } from '../hardSkills/HardSkills';
import { CSSTransition } from 'react-transition-group';
import './skillList.scss';

interface SkillListProps {
  displaySkill: SkillType;
}

export const SkillList: React.FC<SkillListProps> = ({ displaySkill }) => {
  const hardSkillRef = useRef<HTMLDivElement | null>(null);
  const softSkillRef = useRef<HTMLDivElement | null>(null);
  // TSX
  return (
    <>
      <CSSTransition
        in={displaySkill === 'hard'}
        timeout={300}
        classNames='hard-skills-transition'
        nodeRef={hardSkillRef}
        unmountOnExit
      >
        <div
          ref={hardSkillRef}
          className='skills--hard-skills'
        >
          <HardSkills />
        </div>
      </CSSTransition>

      <CSSTransition
        in={displaySkill === 'soft'}
        timeout={300}
        classNames='soft-skills-transition'
        nodeRef={softSkillRef}
        unmountOnExit
      >
        <div
          ref={softSkillRef}
          className='skills--soft-skills'
        >
          <ul>
            <li>
              Ipsum numquam hic sunt at dolorum hic! Assumenda at animi illum
              optio aliquam! Id recusandae nisi sequi hic mollitia. Veritatis
              saepe assumenda voluptatem iure libero error? Repellat sequi quas
              omnis expedita expedita. Quia rem est doloremque ipsam repellendus
              Modi exercitationem ad sed provident et. Veritatis amet ab sit
              atque possimus?
            </li>
            <li>
              Dolor maxime ea minus omnis nesciunt! Iusto ullam voluptates et
              odit ipsum debitis. Sapiente officia facere aliquam accusamus
              libero Deserunt natus quia aperiam est ipsa explicabo? Maxime sint
              nobis voluptatum eos cum Incidunt nobis explicabo quibusdam amet
              ullam, repudiandae Ipsum autem eius ipsum ex provident ut? Facilis
              sed rem mollitia.
            </li>
            <li>
              Dolor praesentium facere sunt officiis natus aliquam? Libero
              laboriosam quos impedit dicta assumenda error, dignissimos Sequi
              eos dolor quia rerum sint blanditiis Quae odit nam culpa esse
              natus aspernatur? Nesciunt eveniet vel nesciunt ad neque? Debitis
              deserunt perspiciatis natus expedita pariatur quo. Maiores
              voluptate dicta excepturi sed harum? Eaque ab.
            </li>
            <li>
              Ipsum quasi reiciendis culpa vero vero atque. Repellendus
              cupiditate dolorem quam possimus nam quas doloremque ipsum
              Dignissimos est dolores facere dignissimos voluptatibus, hic.
              Repellendus maxime mollitia accusantium earum laboriosam dolorum?
              Nulla magni consequatur optio quod provident consequuntur
              cupiditate Voluptatum temporibus earum repellat repudiandae quae
              amet! Incidunt ut dicta nam cumque?
            </li>
          </ul>
        </div>
      </CSSTransition>
    </>
  );
};
