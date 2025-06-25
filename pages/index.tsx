import { DefaultLayout, Container } from "@/layouts/default";
import { Link } from "@heroui/link";
import clsx from "clsx";
import { Code } from "@heroui/code";

export default function IndexPage() {
  const forkBomb = ":(){:|:&};:";

  return (
    <DefaultLayout>
      <section
        id="#"
        className="grid justify-center items-center leading-relaxed h-full"
      >
        <Container className="text-[0.9rem] md:text-[1rem] lg:text-[1.2rem]">
          <h1 className="font-bold text-[2.5em]">
            hello! my name is <span className="text-primary">hal</span>
          </h1>

          <p className="text-[1em] md:text-[1em]">
            I am a software engineer at&nbsp;
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
            ,&nbsp;
            <span className="font-bold italic">scalable services</span>,
            and&nbsp;
            <span className="font-bold italic">DevOps</span> related things.
          </p>

          <p>
            At&nbsp;
            <Link
              href="https://vsc.eco"
              target="_blank"
              className="text-primary italic underline"
            >
              VSC
            </Link>
          </p>

          <p>
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

          <div className="flex justify-center mt-3">
            <Code className="text-xs text-center mx-auto">{forkBomb}</Code>
          </div>
        </Container>
      </section>
    </DefaultLayout>
  );
}
