import { Nav } from "components/Nav/Nav";
import "./index.css";
import BannerSVG from "assets/banner.svg";
import Profile from "assets/profile.svg";
import cx from "classnames";
import { Alert, ContactMe, Project, Section } from "components";
import shortid from "shortid";
import { MdAlternateEmail } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useAlert } from "hooks";
import { PROJECTS } from "assets/content";
import { ContactForm } from "components/Footer";

function App() {
  const links = [
    {
      key: shortid.generate(),
      alt: "email",
      href: "",
      icon: <MdAlternateEmail />,
    },
    {
      key: shortid.generate(),
      alt: "Linkedin",
      href: "",
      icon: <BsLinkedin />,
    },
    {
      key: shortid.generate(),
      alt: "github",
      href: "",
      icon: <BsGithub />,
    },
  ];

  const { alert, onAlert } = useAlert();
  const { collabify, studySpaceFinder, govikes, gradetracker } = PROJECTS;
  return (
    <>
      <Nav />
      <main className="App px-10 leading-relaxed">
        {/* BANNER */}
        <section
          id="banner"
          className={cx([
            "w-full h-[70vh] max-h-[500px] my-20",
            "flex flex-col justify-center items-center gap-10",
          ])}
        >
          <img src={BannerSVG} className="h-80" />

          <div className="flex flex-col justify-center items-center gap-3 text-md">
            <h1 className="font-bold text-brand-50 text-3xl md:text-6xl">
              Hal Nguyen
            </h1>
            <p className="font-bold">Full-stack Developer</p>
            <p className="text-sm md:text-md">
              Computer Science @ University of Victoria
            </p>
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
          <Project
            _title={collabify.title}
            _stacks={collabify.stacks}
            _github={collabify.github}
            _live={collabify.liveSite}
          >
            <p>
              Collabify is a tech-startup by students of University of Victoria.
            </p>
            <p>
              Collabify allows users to easily share their availability with
              others and receive text notifications if an event is created.
              Users can opt in for a private group that requires a password to
              access and to share their availability, authentication is done
              with JSON Web Token. This app is great for coordinating schedules
              and planning events with friends, family, or colleagues.
            </p>
            <p>
              I&apos;m greatful to be selected by the project manager to lead a
              team of 4. Within the months of the Winter semester, we&apos;ve
              managed to pass all of our courses, and to have a MVP hosted!
            </p>
          </Project>

          {/* study space finder */}
          <Project
            _title={studySpaceFinder.title}
            _stacks={studySpaceFinder.stacks}
            _live={studySpaceFinder.liveSite}
            _github={studySpaceFinder.github}
            id="spf"
          >
            <p>
              Study Space Finder is an app that helps students find available
              study spaces on campus (University of Victoria.) It allows
              students to search for spaces by location and time of day, and
              view detailed schedules of each room/building.
            </p>
            <p>
              The majority of my code is pushed into the backend, and the
              backend contains only my code. I&apos;ve put in a lot of the work
              to reverse engineer the&nbsp;
              <a
                href="https://github.com/hn275/StudySpaceFinder/blob/main/db/get_data.py"
                target="_blank"
                className="italic hover:underline"
              >
                requests
              </a>
              &nbsp;a student has to make to register for courses, as it was
              impossible for me to access the university's database directly.
            </p>
          </Project>

          {/* GoVikes */}
          <Project
            _title={govikes.title}
            _stacks={govikes.stacks}
            _github={govikes.github}
            _live={govikes.liveSite}
          >
            <p>
              After figuring out how to get data from University of Victoria
              for&nbsp;
              <a href="#spf" className="italic hover:underline">
                Study Space Finder
              </a>
              , I wanted to fully expose the API (with permission, of course!),
              and to benefit from the performance the Go programming language
              has to offer.
            </p>
            <p>
              This project is in development, and it will likely remain in
              development for a long time, as there is just so much I can do.
            </p>
          </Project>

          {/* GradeTracker*/}
          <Project
            _title={gradetracker.title}
            _stacks={gradetracker.stacks}
            _github={gradetracker.github}
            _live={gradetracker.liveSite}
          >
            <p>
              Grade Tracker is an app for students to log and track their
              grades. It calculates the total grade of each entry and its
              weight, helping students stay organized and achieve their academic
              goals.
            </p>
          </Project>
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

            <ul className="flex gap-4 justify-center items-center">
              {links.map(({ key, alt, href, icon }) => (
                <li key={key}>
                  <a
                    href={href}
                    aria-label={alt}
                    className={cx([
                      "text-brand-300 hover:text-brand-50 text-3xl",
                      "transition-colors duration-150",
                    ])}
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
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

          <ContactMe onAlert={onAlert} />

          <ContactForm />

          <p className="text-sm text-gray-600">Happy recruiting.</p>
        </section>
      </main>
      <Alert isMounted={alert}>Copied to clipboard.</Alert>
    </>
  );
}

export default App;
