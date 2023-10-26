import { Work as WorkType } from "./types";
import { TbTriangle } from "react-icons/tb";
import shortid from "shortid";
import { motion, Variants } from "framer-motion";

export function Work({ title, work, tasks, duration }: WorkType) {
    const li: Variants = {
        hidden: { opacity: 0 },
        show: (i: number) => ({
            opacity: 1,
            transition: { delay: 0.1 * i },
        }),
    };

    return (
        <>
            <div className="flex gap-2 text-base md:text-lg">
                <h3 className="font-semibold">{title}</h3>
                <h4 className="font-semibold text-accent">@ {work}</h4>
            </div>

            <p className="text-sm text-slate-500 py-2">{duration}</p>

            <motion.ul className="flex flex-col gap-1">
                {tasks.map((task, index) => (
                    <motion.li
                        variants={li}
                        custom={index}
                        key={shortid.generate()}
                        style={{ listStyle: "circle" }}
                        className="grid grid-cols-[20px,1fr] gap-2"
                    >
                        <TbTriangle className="text-sm text-brand-50 relative top-[5px] rotate-90" />
                        <p className="text-main">{task}</p>
                    </motion.li>
                ))}
            </motion.ul>
        </>
    );
}
