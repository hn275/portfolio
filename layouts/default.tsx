import { Head } from "./head";
import { Navbar } from "@/components/navbar";
import { clsx } from "clsx";
import { Divider } from "@heroui/divider";

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />

      <main>{children}</main>

      <footer className="w-full flex flex-col items-center justify-center py-3 text-xs gap-3 text-default-600">
        <span>Copyright © 2025 Hal Nguyen. All Rights Reserved.</span>
      </footer>
    </div>
  );
}

export function Container({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "px-5 container mx-auto max-w-4xl flex-grow",
        className ?? "",
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function Section({
  children,
  header,
  id,
}: {
  header: string;
  children: React.ReactNode;
  id: string;
}) {
  return (
    <section
      className="my-5 lg:px-0 flex flex-col gap-3 lg:gap-7 mx-auto justify-center max-w-screen-lg"
      id={id}
    >
      <h2 className="text-[2em] font-bold lg:justify-self-end text-center mt-5">
        {header}
      </h2>
      <Divider className="my-3" />
      {children}
    </section>
  );
}

export function SectionBody({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("flex flex-col gap-2", className)} {...props}>
      {children}
    </div>
  );
}
