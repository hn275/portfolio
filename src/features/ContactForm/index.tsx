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
          required
        />
        <TextInput
          id="email"
          type="email"
          label="Email"
          value={email}
          onChange={onEmail}
          required
        />
      </div>
      <TextInput
        id="subject"
        label="Subject"
        value={subject}
        onChange={onSubject}
        required
      />

      <div className="relative group mt-6">
        <label
          htmlFor="message"
          className={cx([
            "absolute top-0 -translate-y-1/2",
            "bg-main scale-75 px-3 text-brand-200/50 group-focus-within:text-brand-300",
            "dark:text-brand-100/50 dark:group-focus-within:text-brand-100",
            "transition-smooth",
          ])}
        >
          Message
        </label>
        <textarea
          id="message"
          className={cx([
            "peer w-full text-main outline-none",
            "bg-transparent p-3 min-h-[8rem]",
            "border border-brand-50 dark:border-brand-300 rounded-md",
            "placeholder:text-brand-300/50",
            "dark:placeholder:text-brand-100/50",
          ])}
          placeholder="This project is awesome..."
          value={message}
          onInput={onMessage as FormEventHandler<HTMLTextAreaElement>}
          required
        />
      </div>

      <button
        className="btn btn-main flex items-center gap-2 mx-auto mt-6 shadow-main"
        type="submit"
      >
        Send
        {isLoading ? <AiOutlineLoading className="animate-spin" /> : <MdSend />}
      </button>
    </form>
  );
}
