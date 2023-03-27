import { Nav, ContactForm } from "features";
import { ProjectCard } from "features/Project";
import "./index.css";
import BannerSVG from "assets/banner.svg";
import Profile from "assets/profile.svg";
import cx from "classnames";
import { Alert, ContactMe, Section, SocialLinks } from "components";
import { useAlert, useContactMe } from "hooks";
import { PROJECTS } from "assets/content";

function App() {
  const contactMeProps = useContactMe();
  const { alert, onAlert } = useAlert();
  const { collabify, studySpaceFinder, govikes, gradetracker } = PROJECTS;

  return (
    <>
      <Nav />
      <main className="px-10 leading-relaxed">
        {/* BANNER */}
        <section
          id="banner"
          className={cx([
            "w-full h-[70vh] max-h-[500px] my-20",
            "flex flex-col justify-center items-center gap-10",
          ])}
        >
          <img src={BannerSVG} className="h-80" />

          <div className="flex flex-col justify-center items-center gap-4 text-md">
            <h1 className="font-bold text-brand-100 text-2xl md:text-5xl">
              Hal Nguyen
            </h1>
            <p className="text-lg group">
              <span className="relative isolate font-semibold">
                Full-stack
                <span
                  className={cx([
                    "absolute bottom-0 left-0 w-full h-2",
                    "bg-brand-50/40 -z-10",
                  ])}
                />
              </span>
              &nbsp;Developer
            </p>

            <SocialLinks className="flex flex-row gap-3 text-2xl" />
          </div>

          <div className="flex gap-3">
            <a target="_blank" className="btn btn-primary">
              Resume
            </a>
            <a href="#portfolio" className="btn btn-outline">
              Portfolio
            </a>
          </div>
        </section>

        {/* PORTFOLIO */}
        <Section
          id="portfolio"
          _title="Portfolio"
          _count="00"
          className="grid lg:grid-cols-2 gap-6"
        >
          {/* collabify */}
          <ProjectCard
            title={collabify.title}
            stacks={collabify.stacks}
            github={collabify.github}
            live={collabify.liveSite}
            imageSrc=""
          />

          {/* study space finder */}
          <ProjectCard
            title={studySpaceFinder.title}
            stacks={studySpaceFinder.stacks}
            live={studySpaceFinder.liveSite}
            github={studySpaceFinder.github}
            imageSrc=""
          />

          {/* GoVikes */}
          <ProjectCard
            title={govikes.title}
            stacks={govikes.stacks}
            github={govikes.github}
            live={govikes.liveSite}
            imageSrc=""
          />

          {/* GradeTracker*/}
          <ProjectCard
            title={gradetracker.title}
            stacks={gradetracker.stacks}
            github={gradetracker.github}
            live={gradetracker.liveSite}
            imageSrc=""
          />
        </Section>

        {/* SKILLS */}
        <Section id="skills" _title="Skills" _count="02"></Section>

        {/* EDUCATIONS */}
        <Section id="educations" _title="Educations" _count="02"></Section>

        {/* CONTACT */}
        <Section
          id="about"
          _title="About"
          _count="03"
          className={cx([
            "flex flex-col items-center justify-between lg:flex-row lg:items-start gap-5",
          ])}
        >
          <div className="flex flex-col gap-3 max-w-[75ch] grow text-justify">
            <p>
              I&apos;m a Computer Science student at University of Victoria,
              although in school, the majority of my skills are self-taught. If
              not grinding my way through school and work, I enjoy
              building&nbsp;
              <span className="font-semibold">full-stack</span> web
              applications!
            </p>

            <p>
              My programming journey actually began when I was a Physics major
              doing signal analysis for a lab, I wrote my first line of code in
              Python to generate graphs from the results. Down from one rabit
              hole to another, I&apos;ve discovered a passion for programming in
              general, COVID happened and I saw the opportunity to teach myself
              how to code, then finally made the academic switch from Physics to
              Computer Science September 2021!
            </p>

            <p>
              While not writing code, I can be found rock climbing, hiking, and
              sometimes chasing the sunset.
            </p>
          </div>

          <div className="flex flex-col gap-6 justify-center w-full lg:w-max">
            <img
              src={Profile}
              alt="profile"
              className={cx(["hidden lg:block", "w-64"])}
            />

            <SocialLinks className="flex gap-4 justify-center items-center text-3xl" />
          </div>
        </Section>

        <section
          id="footer"
          className="mt-20 mb-10 flex flex-col justify-center items-center gap-5 text-center"
        >
          <h2 className="text-2xl text-brand-50">
            Thanks for seeing this through!
          </h2>
          <p>
            You&apos;ve made it this far, might as well connect with me.
            <br /> I would love to hear what you think about&nbsp;
            <a
              className="italic hover:underline"
              target="_blank"
              href="https://github.com/hn275/portfolio"
            >
              this project
            </a>
            .
          </p>

          <ContactForm id="contact" formprops={contactMeProps} />

          <div className="relative">
            <hr className="border-[1px] border-gray-300/30 w-24" />
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900">
              Or
            </p>
          </div>

          <ContactMe onAlert={onAlert} />

          <p className="text-sm text-gray-600">Happy recruiting.</p>
        </section>
      </main>
      <Alert isMounted={alert}>Copied to clipboard.</Alert>

      <Alert isMounted={contactMeProps.onSuccess.alert}>
        Email sent! Talk to you soon, {contactMeProps.onSuccess.alertName}.
      </Alert>
    </>
  );
}

export default App;
