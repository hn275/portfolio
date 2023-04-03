import { InputHTMLAttributes, useRef } from "react";
import cx from "classnames";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export function TextInput(props: Props) {
  const { label, id } = props;

  const ref = useRef<HTMLInputElement | null>(null);

  return (
    <div
      className={cx(
        "relative p-3",
        "my-3",
        "border border-brand-50 dark:border-brand-300 rounded-md"
      )}
    >
      <input
        ref={ref}
        {...props}
        className="bg-transparent peer outline-none w-full"
        placeholder=" "
      />
      <label
        className={cx(
          "absolute top-0 left-2 -translate-y-1/2 rounded-full",
          "text-brand-100/25 bg-main",
          "scale-75 px-2 cursor-text",
          "peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100",
          "peer-focus:top-0 peer-focus:scale-75 peer-focus:text-brand-100",
          "transition-all duration-200 origin-left"
        )}
        htmlFor={id}
        onClick={() => ref.current?.focus()}
      >
        {label}
        {props.required && <span className="text-sm"> *</span>}
      </label>
    </div>
  );
}
