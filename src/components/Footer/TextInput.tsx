import { InputHTMLAttributes, useRef } from "react";
import cx from "classnames";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export function TextInput(props: Props) {
  const { label, id, className } = props;

  const ref = useRef<HTMLInputElement | null>(null);

  return (
    <div
      className={cx([
        "position relative group",
        "border-b border-b-gray-700",
        "focus-within:border-b-brand-50",
        "p-3 m-5 group",
      ])}
    >
      <label
        className={cx([
          "absolute top-0 left-3",
          "text-gray-600 group-focus-within:text-sm",
          "group-focus-within:text-brand-50",
          "translate-y-1/2 group-focus-within:-translate-y-3",
          { "-translate-y-3 text-sm text-brand-50": props.value !== "" },
          "transition-all duration-200 ease-out",
          "cursor-text",
        ])}
        htmlFor={id}
        onClick={() => ref.current?.focus()}
      >
        {label}
      </label>
      <input
        ref={ref}
        {...props}
        className={cx(["bg-transparent outline-none group", className])}
      />
    </div>
  );
}
