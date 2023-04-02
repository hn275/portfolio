import "./index.css";
import cx from "classnames";
import {
  Alert,
  CopyToClipboard,
  AnimatedSection,
  AnimatedUnderline,
} from "components";
import { useContactMe } from "hooks";
import { ProjectCard, PROJECTS } from "features/Project";
import Collabify from "features/Work/assets/collabify_code.svg";
import Telus from "features/Work/assets/telus_phone.svg";
import { AnimatedBanner, Banner } from "features/Banner";
import { Nav } from "features/Nav";
import { WORK, Work } from "features/Work";
import { About, Skills } from "features/About";
import { ContactForm } from "features/ContactForm";
import { FadeIn, SlideIn } from "layout";
import { motion } from "framer-motion";
import { FloatingSocials } from "features/FloatingSocials";

function App() {
  const contactMeProps = useContactMe();
  const { success, error } = contactMeProps;

  return (
    <>
      <Nav
        className={cx([
          "transition-smooth",
          "sticky top-0 left-0 right-0",
          "h-14 lg:h-24 bg-main",
          "backdrop-blur z-50 isolate",
        ])}
      />
      <main className="px-10 leading-relaxed overflow-x-hidden bg-main">
        {/* BANNER */}
        <AnimatedBanner
          className={cx([
            "w-full h-[100vh] sticky top-0 max-h-[800px] pb-12 md:pb-20",
            "flex flex-col justify-center items-center gap-10",
          ])}
        >
          <Banner />
        </AnimatedBanner>

        {/* ABOUT */}
        <AnimatedSection
          id="about"
          _title="About"
          _count="00"
          className={cx("flex flex-col gap-9", " lg:px-20")}
        >
          <section
            className={cx([
              "lg:grid grid-cols-[60%,1fr] justify-items-center items-center gap-3",
            ])}
          >
            <About />
          </section>

          <motion.hr
            initial={{ width: 0, opacity: 0 }}
            whileInView={{
              width: "100%",
              opacity: 1,
              transition: { delay: 0.4 },
            }}
            viewport={{ once: true }}
            className="border-brand-100/50 self-center"
          />

          <section className="flex flex-col gap-10">
            <Skills />
          </section>
        </AnimatedSection>

        {/* PROJECT */}
        <AnimatedSection
          id="project"
          _title="Project"
          _count="01"
          className="flex flex-col gap-5"
        >
          <ProjectCard {...PROJECTS.collabify}>
            <p className="text-main">
              Collabify is an app for scheduling and event planning. It lets
              users share their availability and receive text notifications.
              Private groups are available with password protection, and
              authentication is done with JSON Web Token.
            </p>
          </ProjectCard>

          <ProjectCard {...PROJECTS.gradeTracker}>
            <p>
              Grade Tracker is a secure and user-friendly web app for students
              to log and track their grades. It has a built-in authentication
              system, here are the mock credentials.
            </p>
            <div className="flex flex-col items-center lg:items-start gap-2 text-brand-50">
              <CopyToClipboard
                value="email@email.com"
                className="bg-slate-900"
              />
              <CopyToClipboard value="password" className="bg-slate-900" />
            </div>
          </ProjectCard>

          <ProjectCard {...PROJECTS.studySpaceFinder}>
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
          </ProjectCard>

          <ProjectCard {...PROJECTS.goVikes}>
            <p>
              This is a proxy server that expose University of Victoria's API
              (with permission), open to all developers/students to use.
            </p>
          </ProjectCard>
        </AnimatedSection>

        {/* WORK */}
        <AnimatedSection
          id="work"
          _title="Work"
          _count="02"
          className="grid place-items-center gap-20 lg:px-10"
        >
          <section className="lg:grid grid-cols-[50%,1fr] gap-5 items-center">
            <SlideIn fromLeft>
              <Work {...WORK.collabify} />
            </SlideIn>
            <SlideIn>
              <img className="hidden lg:block" src={Collabify} />
            </SlideIn>
          </section>

          <section className="lg:grid grid-cols-[1fr,60%] place-items-center gap-5">
            <SlideIn fromLeft>
              <img className="max-h-80 hidden lg:block" src={Telus} />
            </SlideIn>
            <SlideIn className="lg:pl-14">
              <Work {...WORK.telus} />
            </SlideIn>
          </section>
        </AnimatedSection>

        <FadeIn>
          <motion.section
            id="contact"
            className="mt-32 mb-10 flex flex-col justify-center items-center gap-5 text-center"
          >
            <h2 className="text-2xl text-brand-50">
              Thanks for seeing this through!
            </h2>
            <p>
              You&apos;ve made it this far, might as well&nbsp;
              <AnimatedUnderline className="font-semibold">
                say hello
              </AnimatedUnderline>
              .
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
          </motion.section>
        </FadeIn>
      </main>

      <FadeIn delay={0.2}>
        <footer className="p-4 text-slate-500 text-xs bg-slate-800/30">
          <div className="max-w-[1280px] mx-auto flex justify-between items-center">
            <div className="flex gap-3">
              <p>&copy; 2023 Hal Nguyen, all rights reserved.</p>
            </div>
            <div>
              SVGs by&nbsp;
              <a
                target="_blank"
                href="https://undraw.co/"
                className="underline"
              >
                unDraw
              </a>
            </div>
          </div>
        </footer>
      </FadeIn>

      <Alert
        className="fixed bottom-8 left-8"
        isMounted={success.onSuccess || error.onError}
        error={error.onError}
      >
        {success.message ? success.message : error.message}
      </Alert>

      <FloatingSocials
        className={cx(
          " fixed right-5 top-1/2 -translate-y-1/2",
          "hidden lg:flex flex-col gap-4"
        )}
      />
    </>
  );
}

export default App;
