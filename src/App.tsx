import { Nav } from "components/Nav/Nav";
import "./index.css";
import BannerSVG from "assets/banner.svg";
import Profile from "assets/profile.svg";
import cx from "classnames";
import { Alert, ContactMe, Section } from "components";
import shortid from "shortid";
import { MdAlternateEmail } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useAlert } from "hooks";

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

        {/* BANNER */}
        <Section id="portfolio" _title="Portfolio" _count="00"></Section>

        {/* EXPERIENCES */}
        <Section id="experiences" _title="Experiences" _count="01"></Section>

        {/* EDUCATIONS */}
        <Section id="educations" _title="Educations" _count="02"></Section>

        {/* CONTACT */}
        <Section
          id="about"
          _title="About me"
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
          className="mt-20 mb-10 flex flex-col justify-center items-center gap-5"
        >
          <h2 className="text-2xl text-brand-300">
            Thanks for seeing this through!
          </h2>
          <p>
            You&apos;ve made it this far, might as well connect with me. I would
            love to hear what you think.
          </p>

          <ContactMe onAlert={onAlert} />

          <p className="text-sm text-gray-600">Happy recruiting.</p>
        </section>
      </main>
      <Alert isMounted={alert}>Copied to clipboard.</Alert>
    </>
  );
}

export default App;
