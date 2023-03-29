import { Nav, ContactForm, Banner, About } from "features";
import "./index.css";
import cx from "classnames";
import { Alert, CopyToClipboard, Section } from "components";
import { useContactMe } from "hooks";
import { PROJECTS } from "assets/content";
import { ProjectCard } from "features/Project";

function App() {
  const contactMeProps = useContactMe();
  const [collabify, gradeTracker, goVikes, spf] = PROJECTS;

  return (
    <>
      <Nav
        className={cx([
          "sticky top-0 left-0 right-0",
          "h-14 lg:h-24",
          "bg-gray-900/50 backdrop-blur z-50 isolate",
          "border-b border-gray-500/10 z-50",
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
            "lg:grid grid-cols-[60%,1fr] justify-items-center items-start gap-3",
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
          <ProjectCard {...collabify}>
            <p>
              Collabify is an app for scheduling and event planning. It lets
              users share their availability and receive text notifications.
              Private groups are available with password protection, and
              authentication is done with JSON Web Token.
            </p>
          </ProjectCard>

          <ProjectCard {...gradeTracker}>
            <>
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
            </>
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

        {/* EDUCATIONS */}
        <Section id="educations" _title="Educations" _count="02"></Section>

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

          <CopyToClipboard
            value="haln_01@proton.me"
            className="bg-slate-800 text-brand-50 font-mono"
          />

          <p className="text-sm text-gray-600">Happy recruiting.</p>
        </section>
      </main>

      <Alert isMounted={contactMeProps.onSuccess.alert}>
        Email sent! Talk to you soon, {contactMeProps.onSuccess.alertName}.
      </Alert>
    </>
  );
}

export default App;
