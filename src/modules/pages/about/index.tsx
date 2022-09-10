import { ReactComponent as AboutWatermark } from './assets/about_watermark.svg';
import { ReactComponent as AboutSVG } from './assets/about.svg';
import './styles/About.scss';

export const About = () => {
  return (
    <section
      id='about'
      className='container--layout flex-center'
    >
      <div className='about--svg flex-center'>
        <div className='about--watermark watermark'>
          <AboutWatermark />
        </div>
        <div className='about--asset'>
          <AboutSVG />
        </div>
      </div>

      <div className='about-content'>
        <h1>
          <span className='text-dropshadow'>About</span> me
        </h1>
        <p>
          Located in the beautiful island of Victoria, British Columbia, I am
          currently a <span className='bold'>Software Engineering</span> student
          of University of Victoria
        </p>
        <p>
          I picked up Python as the first programming language in 2019. Shortly
          after, the world went into isolation and I was determined to pursue
          programming as a profressional career.
        </p>
        <p>
          Long story short, I landed on&nbsp;
          <span className='bold'>Full Stack Web Development</span> and started
          my journey with <span className='italic'>Codecademy</span>. I've
          learned a lot since, and I'm eager to learn a lot more.
        </p>
        <p>
          Currently I am honing my backend development skills, but I am up for
          any <span className='bold'>frontend</span> work!
        </p>
      </div>
    </section>
  );
};
