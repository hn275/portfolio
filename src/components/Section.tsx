import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  _title: string;
  _count: string;
}

export function Section(props: Props) {
  const { _title, _count, children, className } = props;
  return (
    <section {...props} className="my-20">
      <h2 className="text-3xl font-mono text-brand-100 mb-4">
        <span className="text-2xl text-brand-300">{_count}</span>.&nbsp;{_title}
      </h2>
      <div className={className}>{children}</div>
    </section>
  );
}
