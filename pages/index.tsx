import { DefaultLayout, Container } from "@/layouts/default";
import { Link } from "@heroui/link";
import clsx from "clsx";
import { Code } from "@heroui/code";
import { siteConfig } from "@/config/site";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function IndexPage() {
  const forkBomb = ":(){:|:&};:";

  return (
    <DefaultLayout>
      <section
        id="#"
        className="grid justify-center items-center leading-relaxed h-full"
      >
        <Container className="text-[0.9rem] md:text-[1rem] lg:text-[1.2rem]">
          <h1 className="font-bold text-[2.5em] mb-5">
            hello! my name is <span className="text-primary">hal</span>
          </h1>

          <p className="text-[0.9em]">
            Currently, I am a software engineer at&nbsp;
            <Link
              href="https://vsc.eco"
              target="_blank"
              className="text-primary italic underline text-[1rem] lg:text-[1.2rem]"
            >
              VSC
            </Link>
            , working on decentralized infrastructure for verifiable
            sustainability — building{" "}
            <span className="font-bold italic">distributed systems</span>
            &nbsp;and&nbsp;
            <span className="font-bold italic">scalable services</span>.
          </p>

          <p className="mt-3 text-[0.9em]">
            Outside of software, I’m a&nbsp;
            <span className="font-bold italic">rock climber</span>, and a
            seasoned{" "}
            <span className="font-bold underline cursor-default italic group relative inline-block">
              guitar
              <span
                className={clsx(
                  "p-4 absolute bg-surface -left-[50%] bottom-5 group-hover:bottom-8 w-max",
                  "rounded-lg shadow-lg opacity-0 group-hover:opacity-100",
                  "transition-all pointer-events-none",
                )}
              >
                <span className="text-small font-bold block">
                  Current Guitar Goal
                </span>

                <span className="text-tiny font-normal">
                  PRS SE NF3 with Rosewood Fingerboard 👌
                </span>
              </span>
            </span>
            &nbsp;noodler!
          </p>

          <div className="flex justify-center mt-5 gap-4">
            <Link
              isExternal
              href={siteConfig.links.linkedin}
              title="LinkedIn"
              className="hover:scale-125 transition-all"
            >
              <FaLinkedin size="1.5em" />
            </Link>
            <Link
              isExternal
              href={siteConfig.links.github}
              title="GitHub"
              className="hover:scale-125 transition-all"
            >
              <FaGithub size="1.5em" />
            </Link>
          </div>
        </Container>
      </section>
    </DefaultLayout>
  );
}
