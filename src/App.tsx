import { Nav, ContactForm, Banner, About, Work } from "features";
import "./index.css";
import cx from "classnames";
import {
  Alert,
  CopyToClipboard,
  Section,
  SlideIn,
  SocialLinks,
} from "components";
import { useContactMe } from "hooks";
import { PROJECTS, WORK } from "assets/content";
import { ProjectCard } from "features/Project";
import Collabify from "features/Work/assets/collabify_code.svg";
import Telus from "features/Work/assets/telus_phone.svg";

function App() {
  const contactMeProps = useContactMe();
  const { success, error } = contactMeProps;
  const [projectCollabify, gradeTracker, goVikes, spf] = PROJECTS;
  const [workCollabify, telus] = WORK;

  return (
    <>
      <Nav
        className={cx([
          "sticky top-0 left-0 right-0",
          "h-14 lg:h-24",
          "bg-slate-900/70 backdrop-blur z-50 isolate",
        ])}
      />
      <main className="px-10 leading-relaxed">
        {/* BANNER */}
        <section
          id="banner"
          className={cx([
            "w-full h-[calc(100vh-3.5rem)] max-h-[800px] pb-12 md:pb-20",
            "flex flex-col justify-center items-center gap-10",
          ])}
        >
          <Banner />
        </section>

        {/* ABOUT */}
        <Section
          id="about"
          _title="About"
          _count="00"
          className={cx([
            "lg:grid grid-cols-[60%,1fr] justify-items-center items-center gap-3",
            "lg:px-20",
          ])}
        >
          <About />
        </Section>

        {/* PROJECT */}
        <Section
          id="project"
          _title="Project"
          _count="01"
          className="flex flex-col gap-5"
        >
          <ProjectCard {...projectCollabify}>
            <p>
              Collabify is an app for scheduling and event planning. It lets
              users share their availability and receive text notifications.
              Private groups are available with password protection, and
              authentication is done with JSON Web Token.
            </p>
          </ProjectCard>

          <ProjectCard {...gradeTracker}>
            <p>
              Grade Tracker is an&nbsp;
              <span className="font-semibold inline-block">open source</span>,
              secure and user-friendly web app for students to log and track
              their grades. It has a built-in authentication system, here are
              the mock credentials.
            </p>
            <div className="flex flex-col items-center lg:flex-row gap-3 text-brand-50 mx-auto mb-1">
              <CopyToClipboard
                value="email@email.com"
                className="bg-slate-900"
              />
              <CopyToClipboard value="password" className="bg-slate-900" />
            </div>
          </ProjectCard>

          <ProjectCard {...spf}>
            <p>
              This collaborative project helps students locate available
              classrooms on campus (University of Victoria.) I wrote the backend
              for this project, and as we don&apos;t have direct access to UVic
              database, a lot of work has been put in to&nbsp;
              <a
                className="italic hover:underline"
                href="https://github.com/hn275/StudySpaceFinder/blob/main/db/get_data.py"
                target="_blank"
              >
                retrieve these data
              </a>
              .
            </p>
            <p>
              While the UI is still being developed, server is&nbsp;
              <span className="relative">
                deployed
                <span className="underline-accent" />
              </span>
              !
            </p>
          </ProjectCard>

          <ProjectCard className="h-[350px]" {...goVikes}>
            <p>
              This is a proxy server that expose University of Victoria's API
              (with permission), open to all developers/students to use.
            </p>
          </ProjectCard>
        </Section>

        {/* WORK */}
        <Section
          id="work"
          _title="Work"
          _count="02"
          className="grid place-items-center gap-20 lg:px-10"
        >
          <section className="lg:grid grid-cols-[50%,1fr] gap-5 items-center">
            <SlideIn fromLeft delay={0.4}>
              <Work {...workCollabify} />
            </SlideIn>
            <SlideIn delay={0.8}>
              <img className="hidden lg:block" src={Collabify} />
            </SlideIn>
          </section>

          <section className="lg:grid grid-cols-[1fr,60%] place-items-center gap-5">
            <SlideIn fromLeft delay={0.8}>
              <img className="max-h-80 hidden lg:block" src={Telus} />
            </SlideIn>
            <SlideIn className="lg:pl-14" delay={0.4}>
              <Work {...telus} />
            </SlideIn>
          </section>
        </Section>

        <section
          id="contact"
          className="mt-32 mb-10 flex flex-col justify-center items-center gap-5 text-center"
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

          <ContactForm formprops={contactMeProps} />

          <div className="relative text-slate-400 my-2">
            <hr className="border-[1px] border-slate-500/10 w-24" />
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 px-3">
              or
            </p>
          </div>

          <CopyToClipboard
            value="haln_01@proton.me"
            className="bg-slate-800 text-brand-50 font-mono"
          />
        </section>
      </main>

      <footer className="p-4 text-slate-500 text-xs bg-slate-800/30">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center">
          <div className="flex gap-3">
            <p>&copy; 2023 Hal Nguyen</p>
          </div>
          <div className="flex gap-5">
            <a className="cursor-pointer hover:underline">Resume</a>
            <SocialLinks className="flex items-center gap-4" />
          </div>
        </div>
      </footer>

      <Alert
        className="fixed bottom-8 left-8"
        isMounted={success.onSuccess || error.onError}
        error={error.onError}
      >
        {success.message ? success.message : error.message}
      </Alert>
    </>
  );
}

export default App;
