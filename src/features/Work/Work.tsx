import { WorkProps } from "./types";
import { TbTriangle } from "react-icons/tb";
import shortid from "shortid";

export function Work({ title, work, tasks, duration }: WorkProps) {
  return (
    <>
      <div className="flex gap-2 text-lg">
        <h3 className="font-semibold">{title}</h3>
        <h4 className="font-semibold text-brand-50">@ {work}</h4>
      </div>

      <p className="text-sm text-slate-500 py-2">{duration}</p>

      <ul>
        {tasks.map((task) => (
          <li key={shortid.generate()} className="flex items-start gap-3">
            <TbTriangle className="rotate-90 text-brand-50 relative top-1" />
            <p>{task}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
