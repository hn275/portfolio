import { useContactMe } from "hooks";
import { TextInput } from "./TextInput";
import cx from "classnames";
import { MdSend } from "react-icons/md";

export function ContactForm() {
  const { name, onName, email, onEmail, subject, onSubject } = useContactMe();

  return (
    <form>
      <TextInput id="name" label="Name" value={name} onChange={onName} />
      <TextInput id="email" label="Email" value={email} onChange={onEmail} />
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
        <label htmlFor="message" className="group-focus:text-brand-50">
          Message
        </label>
        <textarea
          id="message"
          className={cx([
            "group w-full text-gray-50",
            "bg-transparent",
            "border border-brand-50/50 rounded-sm",
          ])}
        />
      </div>

      <button className="btn btn-primary flex items-center gap-3">
        Send <MdSend />
      </button>
    </form>
  );
}
