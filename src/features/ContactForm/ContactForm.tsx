import { useContactMe } from "hooks";
import { TextInput } from "components";
import cx from "classnames";
import { MdSend } from "react-icons/md";
import { AiOutlineLoading } from "react-icons/ai";
import { FormEventHandler, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLFormElement> {
  formprops: ReturnType<typeof useContactMe>;
}

export function ContactForm(props: Props) {
  const {
    name,
    onName,
    email,
    onEmail,
    subject,
    onSubject,
    message,
    onMessage,
    handleSubmit,
    isLoading,
  } = props.formprops;

  return (
    <form {...props} onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row md:gap-3">
        <TextInput
          id="name"
          type="text"
          label="Name"
          value={name}
          onChange={onName}
        />
        <TextInput
          id="email"
          type="email"
          label="Email"
          value={email}
          onChange={onEmail}
        />
      </div>
      <TextInput
        id="subject"
        label="Subject"
        value={subject}
        onChange={onSubject}
      />

      <div
        className={cx([
          "text-gray-600 focus-within:text-brand-50 transition-all duration-200",
          "flex flex-col items-start",
        ])}
      >
        <label
          htmlFor="message"
          className="text-brand-300 group-focus:text-brand-50 scale-75"
        >
          Message
        </label>
        <textarea
          id="message"
          className={cx([
            "group w-full text-gray-50 outline-none",
            "bg-transparent p-3 min-h-[8rem]",
            "border border-brand-300 rounded-sm",
            "placeholder:text-gray-700",
          ])}
          placeholder="This project is awesome..."
          value={message}
          onInput={onMessage as FormEventHandler<HTMLTextAreaElement>}
        />
      </div>

      <button
        className="btn btn-primary flex items-center gap-3 mx-auto mt-6"
        type="submit"
      >
        Send&nbsp;
        {isLoading ? <AiOutlineLoading className="animate-spin" /> : <MdSend />}
      </button>
    </form>
  );
}
