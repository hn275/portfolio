import { AnimatePresence, motion, Variants } from "framer-motion";
import { MdContentCopy } from "react-icons/md";
import cx from "classnames";
import { HTMLAttributes } from "react";
import { useAlert } from "hooks";

interface Props extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function CopyToClipboard({ value, className }: Props) {
  const { ok, copy } = useCopyToClipboard();

  const vars: Variants = {
    hidden: { scale: 0, opacity: 0, top: 0 },
    visible: { scale: 1, opacity: 1, top: "-70%" },
  };

  return (
    <div
      className={cx([
        "flex items-center gap-2 w-max",
        "py-2 px-3 rounded-md relative",
        className,
      ])}
    >
      <p>{value}</p>

      <MdContentCopy
        className={cx([
          "opacity-30 hover:opacity-100 transition-smooth",
          "cursor-pointer",
        ])}
        type="button"
        onClick={() => copy(value)}
      />

      <AnimatePresence>
        {ok && (
          <motion.span
            variants={vars}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={cx([
              "absolute -right-4 font-[Roboto]",
              "bg-green-300 py-2 px-3",
              "rounded-xl text-sm text-slate-900",
              "origin-center z-50",
              "font-roboto",
            ])}
          >
            Copied!
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

function useCopyToClipboard() {
  const { alert, onAlert } = useAlert(2000);

  function copy(value: string) {
    navigator.clipboard.writeText(value);
    onAlert();
  }

  return { ok: alert, copy };
}
