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

      <div className="relative group mt-6">
        <label
          htmlFor="message"
          className={cx([
            "absolute top-0 -translate-y-1/2",
            "bg-slate-900 scale-75 px-3 text-brand-100/25",
            "group-focus-within:text-brand-50",
            "transition-smooth",
          ])}
        >
          Message
        </label>
        <textarea
          id="message"
          className={cx([
            "peer w-full text-gray-50 outline-none",
            "bg-transparent p-3 min-h-[8rem]",
            "border border-brand-300 rounded-lg",
            "placeholder:text-brand-100/25",
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
