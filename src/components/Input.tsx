import { HTMLAttributes, ReactNode } from "react";
import cx from "classnames";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  _iconleft?: ReactNode;
  _label?: string;
}

export function Input(props: InputProps) {
  const { _iconleft, _label, id, className } = props;
  return (
    <div>
      {_label && (
        <label className="" htmlFor={id}>
          {_label}
        </label>
      )}
      <div
        className={cx([
          "border border-gray-700 rounded-sm",
          "flex items-center p-2 gap-2 text-gray-600",
          "focus-within:border-gray-500",
          "transition-all duration-150",
          className,
        ])}
      >
        {_iconleft && _iconleft}
        <input
          {...props}
          className="bg-transparent text-gray-100 outline-none"
        />
      </div>
    </div>
  );
}

interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  _label?: string;
}
export function TextArea(props: TextAreaProps) {
  const { className, _label, id } = props;
  return (
    <div>
      {_label && (
        <label className="block" htmlFor={id}>
          {_label}
        </label>
      )}
      <textarea
        {...props}
        className={cx([
          "bg-transparent",
          "border border-gray-700 rounded-sm",
          "min-h-[4rem]",
          className,
        ])}
      />
    </div>
  );
}
