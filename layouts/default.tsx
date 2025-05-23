import { Head } from "./head";
import { Navbar } from "@/components/navbar";
import { clsx } from "clsx";

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />

      <main>{children}</main>

      <footer className="w-full flex items-center justify-center py-3 text-xs">
        <span className="text-default-600">
          Copyright © 2025 Hal Nguyen. All Rights Reserved.
        </span>
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
  className: string;
}) {
  return (
    <div
      className={clsx(
        "container mx-auto max-w-7xl px-6 flex-grow pt-16",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
